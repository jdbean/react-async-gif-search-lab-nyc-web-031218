import React from 'react'

const GifList = (props) => {

  const gifs = props.currentGifs.map((gif) => {
    console.log(gif)
    let url = gif.images.fixed_height.url
    return (<li><img src={url} alt="gif" /></li>)
  })


  console.log(props.currentGifs[0])
  return(
    <div>
       <ul>
         {gifs}
       </ul>
     </div>
  )
}

export default GifList
// <ul>
//   <li>
//     <img src={props.currentGifs[0].embed_url} alt=""/>
//
//   </li>
//   <li>
//     <img src={props.currentGifs[1].embed_url} alt=""/>
//
//   </li>
//   <li>
//     <img src={props.currentGifs[2].embed_url} alt=""/>
//   </li>
// </ul>
