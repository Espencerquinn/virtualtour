import React, { Component } from 'react'
import axios from 'axios'
import InputMask from "react-input-mask"

class UpdateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            Users: []
        };
    }

  componentDidMount(){
    this.getUsers()
  }

  getUsers(){
    axios.get('/api/private/getUser')
        .then((res) => {
          console.log(res.data)
            this.setState({Users: res.data})
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
          Users: res.data,
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

async updateUser () {
  let formattedPhoneNumber = this.formatPhoneNumber (
    this.state.userPhoneNumber
  );
  if (formattedPhoneNumber) {
    const {
      userFullname,
      userEmail,
      userphonenumber,
      selectedUserId
    } = this.state;
    await axios.put(`/api/user`, {
      userFullname,
      userEmail,
      userphonenumber,
      selectedUserId
    });
    this.getUsers();
    this.endUpdateUser();
  }
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

handleInputChange = name => event => {
  this.setState({
    [name]: event.target.value,
    errMsg:""
  });
};

  render() {
    console.log(this.state)
    return (
      <div>
        <div>
          
          <div className="User-Dash">
            {this.state.Users.map((user, index) => {
              return (
                <div className="UsersInfo" key={user.user_id}>
                  <div className="UserInfoNum">{index + 1}</div>
                  <input
                    className="fullname"
                    placeholder={`${user.user_fullname}`}
                    disabled={
                      !this.state.disabled &&
                      this.state.selectedUserId === user.user_id
                        ? ""
                        : "disabled"
                    }
                    onChange={this.handleInputChange("userFullname")}
                  />
                  <input
                    className="title"
                    placeholder={`${user.user_last_name}`}
                    disabled={
                      !this.state.disabled &&
                      this.state.selectedUserId === user.user_id
                        ? ""
                        : "disabled"
                    }
                    onChange={this.handleInputChange("userLastName")}
                  />
                  <InputMask
                    mask="+1 (999) 999-9999"
                    maskChar={null}
                    className="title"
                    placeholder={`${user.user_phone_number}`}
                    onChange={this.handleInputChange("userPhoneNumber")}
                    disabled={
                      !this.state.disabled &&
                      this.state.selectedUserId === user.user_id
                        ? ""
                        : "disabled"
                    }
                  />
                  <input
                    className="title"
                    placeholder={`${user.user_email}`}
                    disabled={
                      !this.state.disabled &&
                      this.state.selectedUserId === user.user_id
                        ? ""
                        : "disabled"
                    }
                    onChange={this.handleInputChange("userEmail")}
                  />
                  <input
                    className="title"
                    placeholder={`${user.default_location}`}
                    disabled={
                      !this.state.disabled &&
                      this.state.selectedUserId === user.user_id
                        ? ""
                        : "disabled"
                    }
                    onChange={this.handleInputChange("userDefaultLocation")}
                  />
                  <input
                    className="title"
                    placeholder={`${user.user_title}`}
                    disabled={
                      !this.state.disabled &&
                      this.state.selectedUserId === user.user_id
                        ? ""
                        : "disabled"
                    }
                    onChange={this.handleInputChange("userTitle")}
                  />
                  {this.state.disabled ? (
                    <div className="edit_delete_container">
                      <div
                        className="edit_button_staff"
                        onClick={e => this.editStaffToggle(user)}
                      />
                      <div
                        className="delete_button_staff"
                        onClick={() => this.deleteUser(user.user_id)}
                      />
                    </div>
                  ) : (
                    <div className="edit_delete_container">
                      <div
                        className={
                          this.state.selectedUserId === user.user_id
                            ? "save_button_staff"
                            : "blank"
                        }
                        onClick={() => this.updateUser()}
                      />
                      <div
                        className={
                          this.state.selectedUserId === user.user_id
                            ? "cancel_button_staff"
                            : "blank"
                        }
                        onClick={() => this.endUpdateUser()}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div>
            <div className="staff_entry_container">
              <div />
              <input
                className="staff_entry first"
                onChange={e => this.setState({ Fullname: e.target.value })}
                placeholder="Full Name"
                value={this.state.Fullname}
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
            <p style={{ color: "red", fontSize: "11px", fontFamily: "prompt" }}>
              {this.state.errMsg}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateUser
