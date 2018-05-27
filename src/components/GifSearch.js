import React from 'react'



export default class GifSearch extends React.Component {

  state = {
    searchValue: ''
  }

  updateSearch = (e) => {
    this.setState({
      searchValue: e.target.value
    }, () => this.props.newSearch(this.state.searchValue))
  }

  render() {
    return(
      <div>
        <input type='text' value={this.state.searchValue} onChange={this.updateSearch} />

        GifSearch</div>
    )
  }
}
