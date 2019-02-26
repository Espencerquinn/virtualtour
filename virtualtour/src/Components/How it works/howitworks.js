import React, { Component } from 'react'
import './howitworks.scss';
import step1 from '../How it works/step1.png'
import step2 from '../How it works/step2.png'
import step3 from '../How it works/step3.png'


export default class howitworks extends Component {
  render() {
    return (
      <div className="howitworks">HOW IT WORKS
          <div className="steps">
                <div className="step1">
                    <div className="image">
                        <img 
                        src={step1} 
                        height="70px"
                        width="auto;" 
                        atl= "Logo" 
                        className="step"/>
                    </div>
                    <div className="description">
                        Rent a camera
                    </div>
                </div>
                <div className="step2">
                    <div className="image">
                        <img 
                        src={step2} 
                        height="70px"
                        width="auto;" 
                        atl= "Logo" 
                        className="step"/>
                    </div>
                    <div className="description">
                      Record 3D pano
                    </div>
                </div>
                <div className="step3">
                    <div className="image">
                        <img 
                        src={step3} 
                        height="70px" 
                        width="auto;" 
                        atl= "Logo" 
                        className="step"
                        />
                    </div>
                    <div className="description">
                        Share with Client
                    </div>
                </div>
        </div>
      </div>
    )
  }
}
