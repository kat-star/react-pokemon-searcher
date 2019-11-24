import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    search: ""
  }

  //on initial load, have filtered pokemons set to all the pokemon too, or else it will be empty
  fetchPokemon = () => {
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(json => {
        this.setState({ 
          pokemons: json, 
          filteredPokemons: json })
      })
  }

  addPokemon = (pokemon) => {
    this.setState((prevState) => {
      return {pokemons: prevState.pokemons.concat(pokemon)}
    })
  }

  componentDidMount() {
    this.fetchPokemon();
  }

  //pass in prop to Search to update the search state
  updateSearch = (text) => {
    this.setState({
      search: text
    });
  }


  render() {
    //computing filtered Pokemon on the fly .includes searches text to see if it has any matches in the string
    const filteredPokemon = this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.search));

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search updateSearch={this.updateSearch} search={this.state.search} />
        <br />
        <PokemonCollection pokemons={filteredPokemon} />
      </Container>
    )
  }
}

export default PokemonPage


//for it to be more pure, should do the filtering in the render, but then would have to move the state for the search into this component. May not be more efficient though than what i'm doing here - however, keeping state for the pokemon in 2 places