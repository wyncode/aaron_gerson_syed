import React from 'react'
import ResultsListItem from './ResultsListItem'
import styles from './ResultsList.module.css'

class ResultsList extends React.Component {
  render() {
    return (
      <ul className={styles.results}>
        {
          this.props.results.map(item => (
            <ResultsListItem
              key={item.sku}
              sku={item.sku}
              title={item.names.title} 
              imgSrc={item.images.standard} 
              currentPrice={item.offers[0].prices.current} 
              originalPrice={item.offers[0].prices.regular} 
            />
          ))
        }
      </ul>
    )
  }
}

export default ResultsList
