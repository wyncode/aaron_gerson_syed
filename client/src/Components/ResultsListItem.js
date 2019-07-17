import React from 'react'
import {Link} from 'react-router-dom'

import styles from './ResultsListItem.module.css'

const ResultsListItem = (props) =>  {
  return (
    <li className={styles.result}>
      <h2 id={styles.title}>{props.title}</h2>
      <img id={styles.image}src={props.imgSrc} alt={props.sku}/>
      <p id={styles.openP}>OpenBox Price: <span>${props.currentPrice}</span></p>
      <p id={styles.originalP}>Original Price: <span>${props.originalPrice}</span></p>
      <Link to={`/product/${props.sku}`}>Details</Link>
    </li>    
  )
}

export default ResultsListItem
