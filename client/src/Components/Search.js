import React from 'react'
import {Redirect} from 'react-router-dom'
import Button from './Button'

import styles from './Search.module.css'

class Search extends React.Component {
  state = {
    inputValue: this.props.initialValue || '',
    submitted: false
  }
  
  handleSubmit = e => {
    e.preventDefault()
    if (e.target.searchInput.value.trim() !== '') {
      this.setState({submitted: true})
    }
  }

  updateInputValue = e => {
    this.setState({
      inputValue: e.target.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.submitted !== this.state.submitted) {
      this.setState({ submitted: false })
    }
  }

  render() {
    if (this.state.submitted){
      return <Redirect to={{pathname: "search", search: `?query=${this.state.inputValue.trim()}`}} />
    }
    return (
      <div className={styles.search}>        
        <form id={styles.submitForm} onSubmit={this.handleSubmit}>
          <input 
            onChange={evt => this.updateInputValue(evt)}
            value={this.state.inputValue}
            type="text"
            name="searchInput"
            id={styles.searchBox}
            size="70"
            placeholder="Search Open Box Item"
          />
          <Button/>
        </form>
      </div>
    )
  }
}

export default Search
