import React from 'react'
import style from './Product.module.css'
const ProductComponent = (props) =>  {
  return(
    <div className={style.product}>
      <h2>{props.title}</h2>
      <img src={props.image} alt={props.sku}/>
      <p id={style.openP}>OpenBox Price: <span>{props.currentPrice}</span></p>
      <p id={style.originalP}>Original Price: <span>{props.regularPrice}</span></p>
      <p id={style.sku}>Sku: <span>{props.sku}</span></p>
      <p id={style.customer}>Average Score: <span>{props.reviews.average}</span></p>
      <p id={style.total}> Total Reviews: <span> {props.reviews.total}</span></p>
      <button src={props.bestBuyURL}>BestBuy Site</button>
    </div>
  ) 
}
  
export default ProductComponent
  