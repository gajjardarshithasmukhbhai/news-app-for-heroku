import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './cvb.css';
import Header from './Header';
class App extends Component {
  render() {
    return (
      <div className="App">
      	<Header/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="trr">Welcome to gajjar darshit</h1>
        </header>
       </div>
    );
  }
}
export default App;
