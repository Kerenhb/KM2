import React, { Component } from 'react';

class Login extends Component {
  render() {
      return(
      <form action="/login" method="post">
      <div className = 'username'>
          <label>Username:</label>
          <input type="text" name="username"/>
      </div>
      <div className = 'password'>
          <label>Password:</label>
          <input type="password" name="password"/>
      </div>
      <div className = 'submit'>
          <input type="submit" value="Log In"/>
      </div>
  </form>
  )}
}

export default Login;
