import React from 'react'
import style from './Product.module.css'
const ProductComponent = (props) =>  {
  return(
    <div className={style.product}>
      <h2>{props.title}</h2>
      <img src={props.image} alt={props.sku}/>
      <p id={style.openP}>OpenBox Price: <spam>{props.currentPrice}</spam></p>
      <p id={style.originalP}>Original Price: <spam>{props.regularPrice}</spam></p>
      <p id={style.sku}>Sku: <spam>{props.sku}</spam></p>
      <p id={style.customer}>Average Score: <spam>{props.reviews.average}</spam></p>
      <p id={style.total}> Total Reviews: <spam> {props.reviews.total}</spam></p>
      <button src={props.bestBuyURL}>BestBuy Site</button>
    </div>
  ) 
}
  
export default ProductComponent
  