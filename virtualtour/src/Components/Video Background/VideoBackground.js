import React, { Component } from 'react'
import videoHome from './videoHome.mp4'
import './VideoBackground.scss';

export default class videoBackground extends Component {
  render() {
    return (
      <div className="videoTop">
          <div class="Header">
          Affordable 3D Walkthroughs 
          </div>
          
          <div class="overlay">
          </div>
          <video
            className='video1Tag' 
            id="background-video"
             
            autoPlay loop muted
            type="video/mp4"
            width="100%" height="100%"
            >
          
            <source src={videoHome} type='video/mp4'/>
            </video>
        
      </div>
    )
  }
}
