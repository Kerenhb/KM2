import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

import Questionnaire from './Questionnaire/index';
import Login from './Login';
import ErrorPage from './ErrorPage';

export default class Root extends Component {
  constructor(props) {
    super(props)
    this.state = { loggedIn : false } // Basic state
  }
  privateRoute = DestinationComponent => {
    // Ensures that you can only navigate to the DestinationComponent if your logged in
    const { loggedIn } = this.state;
    let finalComponent = <Redirect to={{pathname: '/login'}}/>; // if not sends to login
    try {
      if(loggedIn) return finalComponent = <DestinationComponent />; // Sends you to where you wanted to go, if your logged in
      this.isAuthenticated(); // Otherwise checks if your authenticated (async!)
    } catch(error) {
      finalComponent = <Redirect to={{pathname: '/ErrorPage'}}/>; // if not sends to login
    } finally {
      return finalComponent;
    }
  }
  
isAuthenticated = async () => {
    const response = await fetch('/verify', {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
        credentials: 'include'
      })

      const result = await response.json();
      this.setState({ loggedIn : result.loggedIn }); // Updates the state
};

    render() {
      return (
            <Router>
            <div>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/Questionnaire">Questionnaire</Link></li>
                </ul>

                <hr/>

                <Route exact path="/login" component={Login}/>
                <Route path="/Questionnaire" render={() => this.privateRoute(Questionnaire)}/>
                <Route path="/error" component={ErrorPage}/>
            </div>
            </Router>
      );
    }
  };  