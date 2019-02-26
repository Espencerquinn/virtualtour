import React, { Component } from 'react'
import axios from 'axios'
import InputMask from "react-input-mask"
import {Link} from 'react-router-dom'

class UpdateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '{user.id}',
            fullname: '',
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
        this.updateUser = this.updateUser.bind(this)

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

  formatPhoneNumber(phoneNum){
    if (phoneNum) {
      var formatted = phoneNum.replace(/\D/g, "");
      if (formatted.length !== 11) {
        this.setState({
          errMsg: "Please enter in a valid phone number."
        });
        return null;
      } else {
        return `+${formatted}`;
      }
    } else {
      this.setState({
        errMsg: "Please enter a phone "
      });
        return null;
    }
  }

  submitValidation = () => {
    const {
        fullname,
        username,
        email,
        phonenumber,
        password,
    } = this.state;
    if (
        fullname &&
        username &&
        email &&
        phonenumber &&
        password 
    ) {
      this.handleSubmit();
    } else {
      this.setState({
        errMsg: "Please complete all the fields."
    });
  }
};

handleSubmit() {
  let formattedPhoneNumber = this.formatPhoneNumber(this.state.phonenumber)
  if (formattedPhoneNumber) {
    const {fullname, username, email, formattedPhoneNumber } = this.state
    axios.post("/api/registerUser", {
          fullname,
          username, 
          email,
          formattedPhoneNumber
        })
    .then(() => {
      axios.get("/api/users").then(res => {
        this.setState({
          users: res.data,
          fullname: "",
          email: "",
          phonenumber: ""
        });
      });
    })
    .catch(err => {
      console.log(err);
    });
  }
}

editUserToggle(user) {
    this.setState({
      selectedUserId: user.user_id,
      userFullname: user.user_fullname,
      userEmail: user.user_userEmail,
      userphonenumber: user.user_phonenumber,
      disabled: !this.state.disabled
    });
}

 updateUser () {
    console.log("updateusercheck",this.state.user.id)
     axios.put(`/api/user/${this.state.user.id}`, {
      fullname: this.state.fullname,
      username: this.state.username,
      phonenumber: this.state.phonenumber,
      email:this.state.email
    })
    .then( (res) => {
      console.log(this.state)
    })
  }


async deleteUser(userId) {
  await axios.delete(`/api/user/${userId}`);
    this.getUsers();
    this.setState({
      selectedUserId:"",
      disabled: true
    })
}

endUpdateUser(){
  this.getUsers();
  this.setState({
    selectedUserId: "",
    disabled: true
  })
}

handleFullnameUpdate(val){
  this.setState({
      fullname: val
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
              <input
                className="fullname"
                onChange={e => this.handleFullnameUpdate(e.target.value)}
                placeholder={user.fullname}
                value={this.state.fullname}
              />
              <input
                className="staff_entry last"
                onChange={e => this.setState({ LastName: e.target.value })}
                placeholder="Last Name"
                value={this.state.LastName}
              />
              <InputMask
                className="staff_entry phone"
                mask="+1 (999) 999-9999"
                maskChar={null}
                placeholder="Phone #"
                value={this.state.PhoneNumber}
                onChange={e => this.setState({ PhoneNumber: e.target.value })}
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
