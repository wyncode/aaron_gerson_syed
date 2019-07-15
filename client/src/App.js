import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './Pages/Home'
import Product from './Pages/Product'
import Results from './Pages/Results'
import NotFound from './Pages/NotFound'

import './App.css'

class App extends React.Component {
  render() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product/:sku" component={Product} />
          <Route path="/search/:query" component={Results} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}
}
export default App

