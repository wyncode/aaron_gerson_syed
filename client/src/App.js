import React from 'react';

import './App.css';
import Popup from './Components/Popup'; 
import Search from './Components/Search'

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

