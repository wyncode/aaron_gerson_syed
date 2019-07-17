import React from 'react'

const ResultsComponent = (props) =>  {
  return (
    <li>
      <h2>{props.title}</h2>
      <img src={props.imgSrc} alt={props.sku}/>
      <p>OpenBox Price: {props.currentPrice}</p>
      <p>Original Price: {props.originalPrice}</p>
    </li>
  )
}

export default ResultsComponent
