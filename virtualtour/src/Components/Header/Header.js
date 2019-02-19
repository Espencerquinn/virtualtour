import React, { Component } from 'react';
import logo from '../Header/logo.png'
import {Link} from 'react-router-dom'

// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Logo">
        <Link to ='/'> <img src={logo} atl= "Logo" className="logo"/> </Link>
        </div>
        <Link to ='/login'> <button>Login</button> </Link>
        <Link to ='/registration'> <button>Register</button> </Link>
      </div>
    );
  }
}

export default App;
