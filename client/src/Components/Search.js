import React from 'react'
import axios from 'axios'

import styles from './Search.module.css'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  searchResult = () => {
    axios(`/products/search/${this.state.searchInput}`)
      .then(response => console.log(response.data))
  }

  updateInputValue = e => {
    this.setState({
      inputValue: e.target.value
    });
  }

  render() {
    return (
      <div className={styles.search}>
        <h1 id={styles.title}>OpenBox Catalog</h1>
        
        <form id={styles.submitForm} onSubmit={this.searchResult}>
          <input onChange={evt => this.updateInputValue(evt)} value={this.state.inputValue} type="text" id={styles.searchBox} size="70" placeholder="Search Open Box Item"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

  
}

export default Search
