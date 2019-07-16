import React from 'react'
import axios from 'axios'
import { createBrowserHistory } from 'history'
import Search from '../Components/Search'
import ResultsComponent from '../Components/ResultsComponent'


class Results extends React.Component {
  params = new URLSearchParams(this.props.location.search)
  state = {
    results: []
  }

  updateSearchInput = (query) => {
    const history = createBrowserHistory()
    history.replace({
      pathname: '/search',
      search: `?query=${query}`
    })
    this.getNewResults(query)
  }

  getNewResults = (query) => {
    axios(`/products/search/${query}`)
    .then(response => this.setState({results: response.data}))
  }

  componentDidMount() {
    this.getNewResults(this.params.get("query"))
  }

  render() {
    const {results} = this.state
    return(
      <>
        <Search onResults updateSearchInput={this.updateSearchInput}/>
        <ResultsComponent results={results} />
      </>
    )
  }
}

export default Results