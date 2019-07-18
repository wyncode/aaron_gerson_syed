import React from 'react'
import ResultsListItem from './ResultsListItem'
import styles from './ResultsList.module.css'

const ResultsList = (props) => {
  return (
    <ul className={styles.results}> 
      {props.loading && <h3>Searching...</h3>}
      {
        (!props.loading && props.results && props.results.length > 0) ?
        props.results.map(item => (
          <ResultsListItem
            key={item.sku}
            sku={item.sku}
            title={item.names.title} 
            imgSrc={item.images.standard} 
            currentPrice={item.offers[0].prices.current} 
            originalPrice={item.offers[0].prices.regular} 
          />
        ))
        :
        (!props.loading && props.results && props.results.length === 0 && <li>No Results Found</li>)
      }
    </ul>
  )
}

export default ResultsList
