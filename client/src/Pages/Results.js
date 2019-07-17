import React from 'react'
import axios from 'axios'
import Search from '../Components/Search'
import ResultsList from '../Components/ResultsList'

class Results extends React.Component {
  params = new URLSearchParams(this.props.location.search)
  state = {
    results: [],
    query: this.params.get("query"),
    loading: true
  }

  getNewResults = (query) => {
    axios(`/products/search/${query}`)
      .then(response => response && this.setState({results: response.data, query, loading: false}))
      .catch(e => this.setState({results: [], loading: false}))
  }

  componentDidMount() {
    this.getNewResults(this.state.query)
  }

  componentDidUpdate() {
    const search = new URLSearchParams(this.props.location.search)
    if (search.get("query") !== this.state.query) {
      this.getNewResults(search.get("query"))
    }
  }

  render() {
    const {results, query, loading} = this.state
    return(
      <>
        <Search initialValue={query} />
        <ResultsList results={results} loading={loading} />
      </>
    )
  }
}

export default Results