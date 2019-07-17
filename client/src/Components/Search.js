import React from 'react'
import axios from 'axios'

import styles from './Search.module.css'
import Button from './Button'
import logo from '../img/logo.png'
class Search extends React.Component {
  state = {
    searchInput: ""
  }

  searchResult = () => {
    axios(`/products/search/${this.state.searchInput}`)
      .then(response => console.log(response.data))
  }

  render() {
    return (
      <div className={styles.search}>
        
        
        <form id={styles.submitForm} onSubmit={this.searchResult}>
          <input value={this.state.searchInput} type="text" id={styles.searchBox} size="70" placeholder="Search Open Box Item"></input>
          <Button/>
        </form>
      </div>
    )
  }
}

export default Search