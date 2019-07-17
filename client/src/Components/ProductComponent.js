import React from 'react'

const ProductComponent = (props) =>  {
  return(
    <div>
      <h2>{props.title}</h2>
      <img src={props.image} alt={props.sku}/>
      <p>OpenBox Price: {props.currentPrice}</p>
      <p>Original Price: {props.regularPrice}</p>
      <p>Sku: {props.sku}</p>
      <p>CustomerReviews: Average Score:{props.reviews.average} Total Reviews:{props.reviews.total}</p>
      <button src={props.bestBuyURL}>Site</button>
    </div>
  ) 
}
  
export default ProductComponent
  