import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  getUsers = () => {
    fetch('/getUsers', {
      method: 'GET',
      headers: { 'content-type': 'application/json' }
    })
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(`An error occurred: ${err}`))
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick = {() => { this.getUsers() }}>
          See all users
        </button>
      </div>
    );
  }
}

export default App;
