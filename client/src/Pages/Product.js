import React from 'react'
import axios from 'axios'
import ProductComponent from '../Components/ProductComponent'
import {Redirect} from 'react-router-dom'
import style from './Product.module.css'

class Product extends React.Component {
  state = {
    currentSku: this.props.match.params.sku,
    currentProduct: {},
    productExists: false
  }

  componentDidMount() {
    axios(`/products/${this.state.currentSku}`)
      .then(response => response && this.setState({currentProduct: response.data, productExists: true}))
      .catch(e => this.setState({currentProduct: {}, productExists: false}))
  }

  render(){
    const {currentProduct, productExists} = this.state
    return(
      <div className={style.product}>
        { (productExists && Object.keys(currentProduct).length > 0) ?
          <ProductComponent 
            sku={currentProduct.sku}
            title={currentProduct.names.title}
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
          :
          (productExists && Object.keys(currentProduct).length === 0 ? <Redirect to="/" /> : "<h1>Loading...</h1>")
        } 
      </div>
    )
  }
}

export default Product
