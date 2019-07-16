const ResultsComp = (props) =>  {
  

     
      const items = this.props.map(item =>{
        <li>
            <h2>{this.props.title}</h2>
            <img>{item.images.standard}</img>
            <p>OpenBox Price: {item.prices.current}</p>
            <p>Original Price: {item.prices.regular}</p>
        </li>
      })
      return items
  
    
  }
  
  export default ResultsComp
