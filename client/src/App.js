import React from 'react';

import './App.css';

class App extends React.Component {
  
  searchResult = () =>{
   // var results = document.getElementById('searchbar').value
    fetch('https://api.bestbuy.com/beta/products/openBox&pageSize=20.json?apiKey=BKMqrrbJYO6728izPqs1mZuS')
    .then(Response => Response.json())
    .then(data => console.log(data.results))
  }
  
  render() {
  return (
    <div className="App">
      <h1 id="title">OpenBox Catalog</h1>
      
      <div class="submitForm"> 
        <form>
          <input type="text" id="searchbar" size="70" placeholder="Search Open Box Item"></input>
        </form>
        <button onClick={this.searchResult}>Submit</button>
      </div>
     
     
    </div>
  );
}
}
export default App;

