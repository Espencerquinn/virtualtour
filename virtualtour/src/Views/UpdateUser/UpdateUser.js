import React, { Component } from 'react'
import axios from 'axios'
import InputMask from "react-input-mask"
import {Link} from 'react-router-dom'
import UpdateProfile from '../../Components/Update Profile/UpdateProfile'

class UpdateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '{user.id}',
            firstname: '',
            fullname:'',
            lastname:'',
            username: '',
            email: '',
            phonenumber:'',
            password: '',
            disabled: true,
            selectedUserId:"",
            userFullname:"",
            selectedUserId: "",
            userEmail: "",
            userphonenumber: "",
            user: {}
        }
        // this.updateUser = this.updateUser.bind(this)

    }

  componentDidMount(){
    this.getUsers()
  }

  getUsers(){
    axios.get('/api/private/getUser')
        .then((res) => {
          console.log("SESSION", res.data.user)
            this.setState({user: res.data.user})
        })
        .catch(err => console.log("error:". err))
  }


 updateUser () {
    console.log("updateusercheck",this.state.user.id)
     axios.put(`/api/user/${this.state.user.id}`, {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      phonenumber: this.state.phonenumber,
      email:this.state.email
    })
    .then( (res) => {
      console.log(this.state)
    })
  }



handleChange= (prop, val) => {
  this.setState({
      [prop]:val
  })
}

  render() {
    console.log("USER OBJECT:")
    console.log(this.state.user)
    const {user} = this.state
    return (
          
          <div>
            <div className="Update_User">
              <div />
              <UpdateProfile
                key={user.id}
                id={user.id}
                userfirstname={user.firstname}
                userlastname={user.lastname}
                userusername={user.username}
                userphonenumber={user.phonenumber}
                useremail={user.email}
                updateUserFn={this.updateUser}
                userProfilePic={user.url}
                handleChangeFn={this.handleChange}

              />
              <input
                className="fullname"
                onChange={e => this.handleFullnameUpdate(e.target.value)}
                placeholder={user.firstname}
                value={this.state.firstname}
              />
              <input
                className="staff_entry last"
                onChange={e => this.setState({ LastName: e.target.value })}
                placeholder={user.lastname}
                value={this.state.lastname}
              />
              <InputMask
                className="staff_entry phone"
                mask="+1 (999) 999-9999"
                maskChar={null}
                placeholder={user.phonenumber}
                value={this.state.phonenumber}
                onChange={e => this.setState({ phonenumber: e.target.value })}
              />
              <input
                className="staff_entry email"
                onChange={e => this.setState({ Email: e.target.value })}
                placeholder="Email"
                value={this.state.Email}
              />
              <input
                className="staff_entry location"
                onChange={e =>
                  this.setState({ DefaultLocation: e.target.value })
                }
                placeholder="Room #"
                value={this.state.DefaultLocation}
              />
              <input
                className="staff_entry title"
                onChange={e => this.setState({ Title: e.target.value })}
                placeholder="Title"
                value={this.state.Title}
              />
              <div
                className="submit_new_staff_plus"
                onClick={this.submitValidation}
              />
            </div>
            <div className='updateUser-buttons'>
                    <Link to='/'><button className='form-button' onClick={() => this.handleClear()}>Cancel</button></Link>
                    <button className='form-button'onClick={() => this.updateUser()}>Save Changes</button>
            </div>
          </div>
    );
  }
}

export default UpdateUser
