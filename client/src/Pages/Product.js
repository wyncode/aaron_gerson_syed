import React from 'react'
import axios from 'axios'
import ProductComponent from '../Components/ProductComponent'
import {Redirect} from 'react-router-dom'

class Product extends React.Component {
  state = {
    currentSku: this.props.match.params.sku,
    currentProduct: {},
    loading: true
  }

  componentDidMount() {
    axios(`/products/${this.state.currentSku}`)
      .then(response => response && this.setState({currentProduct: response.data, loading: false}))
      .catch(e => this.setState({currentProduct: {}, loading: false}))
  }

  render(){
    const {loading, currentProduct} = this.state
    console.log(currentProduct)
    return(
      <>
        { loading && <h1>Loading...</h1> }
        { (Object.keys(currentProduct).length > 0) &&
          <ProductComponent 
            sku={currentProduct.sku}
            title={currentProduct.title}
            image={currentProduct.images.standard}
            currentPrice={currentProduct.prices.current}
            regularPrice={currentProduct.prices.regular}
            reviews={
              {
                average: currentProduct.customerReviews.averageScore,
                total: currentProduct.customerReviews.count
              }
            }
            bestBuyURL={currentProduct.links.product}
          />
        } 
      </>
    )
  }
}

export default Product