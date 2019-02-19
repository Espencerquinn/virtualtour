import React, {Component} from 'react';
import axios from 'axios';
import { v4 as randomString } from 'uuid';
import Dropzone from 'react-dropzone';
import { GridLoader } from 'react-spinners';

class addProperty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            city: '',
            state:'',
            zip: '',
            price: '',
            vrlink: '',

        };
        this.postProperty = this.postProperty.bind(this)
    }

postProperty(){
  console.log(this.state)
  console.log('hit register')
  axios.post('/api/private/addProperty',
  {
    fullname:this.state.fullname,
    username: this.state.username,
    email: this.state.email,
    phonenumber: this.state.phonenumber,
    password:this.state.password,
    url: this.state.url
  })
  // console.log('testing')
  .catch(err => {
    console.log(err);
  })
}

    handleChange(prop, val) {
        this.setState({
            [prop]:val
        })
    }
  
  
    render() {
        const {name, address, city, state, zip, price, vrlink } =this.state;
        return (
            <div className='Login'>
                <input
                    value={name}
                    onChange={e => this.handleChange('name', e.target.value)}
                    placeholder= "address"
                /> 
                <input
                    value={address}
                    onChange={e => this.handleChange('address', e.target.value)}
                    placeholder= "address"
                />
                <input
                    value={city}
                    onChange={e => this.handleChange('city', e.target.value)}
                    placeholder= "email"
                />
                <input
                    value={state}
                    onChange={e => this.handleChange('state', e.target.value)}
                    placeholder= "phone number"
                />
                <input
                    value={zip}
                    onChange={e => this.handleChange('zip', e.target.value)}
                    placeholder= "password"
                />
                <input
                    value={price}
                    onChange={e => this.handleChange('price', e.target.value)}
                    placeholder= "price"
                />
                <input
                    value={vrlink}
                    onChange={e => this.handleChange('vrlink', e.target.value)}
                    placeholder= "vrlink"
                />    
                <button onClick={this.postProperty}>Create New User</button>
            
            </div>
        )
    }
}


export default addProperty