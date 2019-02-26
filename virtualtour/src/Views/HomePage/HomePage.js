import React, { Component } from 'react';
import {HashRouter as Router} from 'react-router-dom';
import Header from '../../Components/Header/Header'
import VideoBackground from '../../Components/Video Background/VideoBackground'
import HowItWorks from '../../Components/How it works/howitworks'
import SellMore from '../../Components/SellMore/SellMore'
// import routes from '../../routes'
// import './App.css';

class HomePage extends Component {
  render() {
       
    return ( 
          <div className="Homepage">
            <Header/>
            <VideoBackground/>
            <HowItWorks/>
            <SellMore/>
          </div>    
    );
  }
}

export default HomePage;
