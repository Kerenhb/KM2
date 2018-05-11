import React, { Component } from 'react';
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
        <header>
          <h1 className="App-title">Understanding Your Preferred Role in a Team</h1>
        </header>
        <button onClick = {() => { this.getUsers() }}>
          See all users
        </button>
      </div>
    );
  }
}

export default App;
