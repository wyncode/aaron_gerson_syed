import React from 'react'

const ResultsComponent = (props) =>  {
    return (
      props.results.map(item => (
        <li>
            <h2>{item.names.title}</h2>
            <img src={item.images.standard} alt={`${item.sku}`}/>
            <p>OpenBox Price: {item.prices.current}</p>
            <p>Original Price: {item.prices.regular}</p>
        </li>
      ))
    )
}

export default ResultsComponent
