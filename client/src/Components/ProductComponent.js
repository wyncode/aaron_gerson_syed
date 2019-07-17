const ProductComponent = (props) =>  {
       
    const items =
     <div>
      
          <h2>{this.props.title}</h2>
          <img>{this.props.images.standard}</img>
          <p>OpenBox Price: {this.props.prices.current}</p>
          <p>Original Price: {this.props.prices.regular}</p>
          <p>Sku: {this.props.sku}</p>
          <p>CustomerReviews: {this.props.customerReviews}</p>
          <button src={this.props.links.product}>Site</button>
      
    </div>
    return items
  }
  
  export default ProductComponent
  