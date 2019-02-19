import React, { Component } from 'react';
import {HashRouter as Router} from 'react-router-dom';
import Header from '../../Components/Header/Header'
// import routes from '../../routes'
// import './App.css';

class HomePage extends Component {
  render() {
       
    return ( 
          <div className="Homepage">
            <Header/>
          </div>    
    );
  }
}

export default HomePage;
