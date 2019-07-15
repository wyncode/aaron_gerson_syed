import React from 'react';

import './App.css';
import Search from './Search'
import Popup from './Popup';

class App extends React.Component {
  
  
  
  render() {
  return (
    <div className="App">
      <Search />
      <Popup />
    </div>
  );
}
}
export default App;

