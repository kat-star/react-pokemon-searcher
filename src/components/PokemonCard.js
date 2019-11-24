import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState((state) => {
      return {clicked: !state.clicked}
    });
  }

  render() {

    const {pokemon, pokemon: {name, stats, sprites}} = this.props

    return (
      <Card>
        <div>
          <div className="image" onClick={this.handleClick}>
            <img src={this.state.clicked ? sprites.back : sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats.find(ele => ele.name === 'hp').value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
