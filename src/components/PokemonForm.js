import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl
        },
        stats: [{
          value: this.state.hp,
          name: "hp"
        }]
      })
    })
      .then(resp => resp.json())
      .then(newPoke => {
        this.props.addPokemon(newPoke)
      })
  }

  handleChange = (event) => {
    event.persist();
    this.setState({
      [event.target.id]: event.target.value
    })
  }
    
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" id="hp" value={this.state.hp} onChange={this.handleChange} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" id="frontUrl" value={this.state.frontUrl} onChange={this.handleChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" id="backUrl" value={this.state.backUrl} onChange={this.handleChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
