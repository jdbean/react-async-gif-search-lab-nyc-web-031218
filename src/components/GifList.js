import React from 'react'


const GifList = (props) => {
  if (props.currentGifs[0]) {
    console.log(props.currentGifs[0])
    return(
      <ul>
        <li>
          <img src={props.currentGifs[0].embed_url} alt=""/>

        </li>
        <li>
          <img src={props.currentGifs[1].embed_url} alt=""/>

        </li>
        <li>
          <img src={props.currentGifs[2].embed_url} alt=""/>
        </li>
      </ul>
    )
  } else {
    return(null)
  }
}

export default GifList
