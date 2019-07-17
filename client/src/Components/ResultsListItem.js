import React from 'react'
import styles from './ResultsListItem.module.css'
const ResultsListItem = (props) =>  {
  return (
    <li className={styles.result}>
      <h2 id={styles.title}>{props.title}</h2>
      <img id={styles.image}src={props.imgSrc} alt={props.sku}/>
      <p id={styles.openP}>OpenBox Price: <spam>${props.currentPrice}</spam></p>
      <p id={styles.originalP}>Original Price: <spam>${props.originalPrice}</spam></p>
     <button>Learn More</button>
    </li>    
  )
}

export default ResultsListItem
