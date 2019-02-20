import React, { Component } from 'react';
import Header from './Components/Header/Header.js';
import Search from './Components/Search/Search.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <br />
        <Search />
      </div>
    );
  }
}

export default App;
