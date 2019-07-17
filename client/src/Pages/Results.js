import React from 'react'
import axios from 'axios'
import { createBrowserHistory } from 'history'
import Search from '../Components/Search'
import ResultsComponent from '../Components/ResultsComponent'
import {debounce} from '../utils'


class Results extends React.Component {
  params = new URLSearchParams(this.props.location.search)
  state = {
    results: [],
    query: this.params.get("query")
  }

  updateSearchInput = (query) => {
      // TODO: add checks for if query exists and such...
      const history = createBrowserHistory()
      history.replace({
        pathname: '/search',
        search: `?query=${query}`
      })

    this.setState({query}, () => this.debouncedAxios())
  }

  debouncedAxios = debounce(() => {
    // this.getNewResults(this.state.query)
    axios(`/products/search/${this.state.query}`)
    .then(response => response && this.setState({results: response.data}))
  }, 500)

  getNewResults = (query) => {
    axios(`/products/search/${query}`)
    .then(response => response && this.setState({results: response.data}))
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