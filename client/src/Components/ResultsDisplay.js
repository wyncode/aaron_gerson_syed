import React from 'react'
import axios from 'axios'
import resultComponent from 'resultComponent'
import styles from './Search.module.css'

class Results extends React.Component {
  

  render() {
    const items = this.props.results.map(item => (
      <ResultComponent title={item.names.title} imgSrc={item.images.standard} currentPrice={item.offer[0].prices.current} originalPrice={item.offer[0].prices.regular} />
     ))

    return (
      <ul>
        {items}
      </ul>
    )

  }
}

export default Results
