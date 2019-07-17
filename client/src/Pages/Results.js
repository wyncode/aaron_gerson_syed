import React from 'react'
import axios from 'axios'
import { createBrowserHistory } from 'history'
import Search from '../Components/Search'
import ResultsList from '../Components/ResultsList'
import {debounce} from '../utils'


class Results extends React.Component {
  params = new URLSearchParams(this.props.location.search)
  state = {
    results: [],
    query: this.params.get("query")
  }

  handleChange = (query) => {
    // TODO: add checks for if query exists and such...
    const history = createBrowserHistory()
    history.replace({
      pathname: '/search',
      search: `?query=${query}`
    })

    this.setState({query}, () => this.debouncedAxios())
  }

  debouncedAxios = debounce(() => {
    this.getNewResults(this.state.query)
  }, 1500)

  getNewResults = (query) => {
    axios(`/products/search/${query}`)
      .then(response => response && this.setState({results: response.data}))
  }

  componentDidMount() {
    this.getNewResults(this.params.get("query"))
  }

  render() {
    const {results, query} = this.state
    return(
      <>
        <Search initialValue={query} updatedSearchInput={this.handleChange}/>
        <ResultsList results={results} />
      </>
    )
  }
}

export default Results