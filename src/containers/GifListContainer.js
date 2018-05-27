import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {

  state = {
    currentGifs: []
  }

  newSearch = (query) => {
    const RawURL = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
    const URL = encodeURI(RawURL)

    fetch(URL,{
      method: 'GET'
    }).then(resp => resp.json())
    .then(json => json.data.slice(0, 3))
    // .then(three => console.log(three))
    .then(threeGifs => this.setState({
      currentGifs: threeGifs
    }))
  }

  render() {
    return(
      <div className='GifListContainer'>
        < GifSearch newSearch={this.newSearch} />
        < GifList currentGifs={this.state.currentGifs} />
      </div>
    )
  }
}

export default GifListContainer
