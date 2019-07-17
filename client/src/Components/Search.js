import React from 'react'
import {Redirect} from 'react-router-dom'

import styles from './Search.module.css'

class Search extends React.Component {
  state = {
    inputValue: this.props.initialValue || '',
    submitted: false
  }
  
  handleSubmit = e => {
    e.preventDefault()
    this.setState({submitted: true})
  }

  updateInputValue = e => {
    this.setState({
      inputValue: e.target.value
    })
    if(this.props.updatedSearchInput) {
      this.props.updatedSearchInput(e.target.value)
    }
  }

  render() {
    if (this.state.submitted && !this.props.updatedSearchInput){
      return <Redirect to={{pathname: "search", search: `?query=${this.state.inputValue}`}} />
    }
    return (
      <div className={styles.search}>        
        <form id={styles.submitForm} onSubmit={this.handleSubmit}>
          <input 
            onChange={evt => this.updateInputValue(evt)}
            value={this.state.inputValue}
            type="text"
            id={styles.searchBox}
            size="70"
            placeholder="Search Open Box Item"
          />
          { !this.props.updatedSearchInput && <button type="submit">Submit</button> }
        </form>
      </div>
    )
  }
}

export default Search
