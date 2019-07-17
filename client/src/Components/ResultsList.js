import React from 'react'
import ResultsListItem from './ResultsListItem'
import styles from './ResultsList.module.css'

<<<<<<< HEAD
const ResultsList = (props) => {
  return (
    <ul>
      {
        (props.results && props.results.length > 0) ?
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
        <li>No Results Found</li>
      }
    </ul>
  )
=======
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
>>>>>>> enhancement-26-gerson-style-results-page
}

export default ResultsList
