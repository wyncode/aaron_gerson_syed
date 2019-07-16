import React from 'react'
import {Redirect} from 'react-router-dom'

import styles from './Search.module.css'

class Search extends React.Component {
  state = {
    inputValue: '',
    submitted: false
  }
  
  searchResult = e => {
    e.preventDefault()
    this.setState({submitted: true})
  }

  updateInputValue = e => {
    this.setState({
      inputValue: e.target.value
    })
    if(this.props.onResults) {
      this.props.updateSearchInput(this.state.inputValue)
    }
  }

  render() {
    if (this.state.submitted && !this.props.onResults){
      return <Redirect to={{pathname: "search", search: `?query=${this.state.inputValue}`}} />
    }
    return (
      <div className={styles.search}>
        <h1 id={styles.title}>OpenBox Catalog</h1>
        
        <form id={styles.submitForm} onSubmit={this.searchResult}>
          <input onChange={evt => this.updateInputValue(evt)} value={this.state.inputValue} type="text" id={styles.searchBox} size="70" placeholder="Search Open Box Item"></input>
          { !this.props.onResults && <button type="submit">Submit</button> }
        </form>
      </div>
    )
  }
}

export default Search
