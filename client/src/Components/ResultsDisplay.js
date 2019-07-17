import React from 'react'
import ResultsComponent from 'ResultsComponent'

class Results extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.results.map(item => (
            <ResultsComponent 
              key={item.sku}
              title={item.names.title} 
              imgSrc={item.images.standard} 
              currentPrice={item.offer[0].prices.current} 
              originalPrice={item.offer[0].prices.regular} 
            />
          ))
        }
      </ul>
    )
  }
}

export default Results
