import React from 'react'

import styles from './Search.module.css'

class Search extends React.Component {
  state = {
    searchInput: ""
  }
  
  searchResult = () => {
    fetch(`/products/search/${this.state.searchInput}`)
      .then(Response => Response.json())
      .then(data => console.log(data.results))
  }

  render() {
    return (
      <div className={styles.search}>
        <h1 id={styles.title}>OpenBox Catalog</h1>
        
        <form id={styles.submitForm} onSubmit={this.searchResult}>
          <input value={this.state.searchInput} type="text" id={styles.searchBox} size="70" placeholder="Search Open Box Item"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Search