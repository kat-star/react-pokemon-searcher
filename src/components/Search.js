import React from 'react'

class Search extends React.PureComponent {
  
  handleChange = (event) => {
    this.props.updateSearch(event.target.value)
  }
  
  render() {
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input className="prompt" onChange={this.handleChange} id="searchValue" name="searchValue" value={this.props.search} />
          <i className="search icon" />
        </div>
      </div>
    )
    }

}

export default Search
