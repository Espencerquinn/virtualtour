import React, { Component } from 'react';
import Pricing from '../../Components/Pricing/Pricing'
import {Link} from 'react-router-dom'
import 
import './RentaCamera.scss';

class RentaCamera extends Component {
  render() {
       
    return (
           <div className="Body">
                <Pricing/>
           </div>
             
           
    );
  }
}

export default RentaCamera;
