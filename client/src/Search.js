import React from 'react';

import styles from './Search.module.css';

class Search extends React.Component {
    searchResult = () =>{
        // var results = document.getElementById('searchbar').value
         fetch(`/products/search/${this.state.searchInput}`)
         .then(Response => Response.json())
         .then(data => console.log(data.results))
       }

       state = {searchInput: ""}

  render() {
  return (
    <div className={styles.search}>
      <h1 id={styles.title}>OpenBox Catalog</h1>
      
      <div id={styles.submitForm}> 
        <form>
          <input value = {this.state.searchinput} type="text" id={styles.searchBox} size="70" placeholder="Search Open Box Item"></input>
        </form>
        <button onClick={this.searchResult}>Submit</button>
      </div>
    </div>
  );
}
}
export default Search;

