import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // remove non dom
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
                <Route path="/Questionnaire" component={Questionnaire}/>
                <Route path="/error" render={() => <div>Error!</div>}/>
            </div>
            </Router>
      );
    }
  }