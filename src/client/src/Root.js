import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

import Questionnaire from './Questionnaire/index';
import Login from './Login';

export default class Root extends Component {
  constructor(props) {
    super(props)
    this.state = { loggedIn : false }
  }
  privateRoute = (DestinationComponent) => {
    const { loggedIn } = this.state;
    if(!loggedIn) this.isAuthenticated();

    let finalComponent = <Redirect to={{pathname: '/login'}}/>;
    if(loggedIn) finalComponent = <DestinationComponent />;

    return finalComponent;
  }
  
isAuthenticated = async () => {
    const response = await fetch('/verify', {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
        credentials: 'include'
      })

      const result = await response.json();
      this.setState({ loggedIn : result.loggedIn });
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
                <Route path="/error" render={() => <div>Error!</div>}/>
            </div>
            </Router>
      );
    }
  };  