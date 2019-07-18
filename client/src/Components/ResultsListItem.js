import React from 'react'
import {Link} from 'react-router-dom'

import styles from './ResultsListItem.module.css'

const ResultsListItem = (props) =>  {
  return (
    <li className={styles.result}>
      <Link to={`/product/${props.sku}`}>
        <img id={styles.image}src={props.imgSrc} alt={props.sku}/>
      </Link>
      <Link to={`/product/${props.sku}`}>
        <h4 id={styles.title}>{props.title}</h4>
      </Link>
      <p id={styles.originalP}>Original Price: <span>${props.originalPrice}</span></p>
      <p id={styles.openP}>OpenBox Price: <span>${props.currentPrice}</span></p>
      <Link id={styles.detailButton} to={`/product/${props.sku}`}>Details</Link>
    </li>    
  )
}

export default ResultsListItem
