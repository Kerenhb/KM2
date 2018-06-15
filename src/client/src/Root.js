import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'; // remove non dom
import React, { Component } from 'react';

import Questionnaire from './Questionnaire/index';
import Login from './Login';

export default class Root extends Component {
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
                <PrivateRoute path="/Questionnaire" component={Questionnaire}/>
                <Route path="/error" render={() => <div>Error!</div>}/>
            </div>
            </Router>
      );
    }
  };

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? ( //Doesn't work!
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
      
    />
  );
  
async function isAuthenticated() {
    const response = await fetch('/verify', {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
        credentials: 'include'
      })

      const result = await response.json();
      return result.loggedIn;
};  