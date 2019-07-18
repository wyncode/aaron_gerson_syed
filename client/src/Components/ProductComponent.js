import React from 'react'
import style from './ProductComponent.module.css'
const ProductComponent = (props) =>  {
  return(
    <div className={style.product}>
      <h2>{props.title}</h2>
      <img src={props.image} alt={props.sku}/>
      <p id={style.openP}>OpenBox Price: <span>${props.currentPrice}</span></p>
      <p id={style.originalP}>Original Price: <span>${props.regularPrice}</span></p>
      <p id={style.sku}>Sku: <span>{props.sku}</span></p>
      <p id={style.customer}>Product Rating: <span>{props.reviews.average}</span></p>
      <a href={props.bestBuyURL} target="blank">Buy Now!</a>
    </div>
  ) 
}
  
export default ProductComponent
  