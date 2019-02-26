return (
    <div>
      <div>
        <div className="user-dash">
             return ( 
          <div className="usersInfo">
              <input
                  className="fullname"
                  placeholder="testing"
                  disabled={
                    !this.state.disabled &&
                    this.state.selectedUserId === user.user_id
                      ? ""
                      : "disabled"
                  }
                  value={user.fullname}
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
          } 
          )} 
        </div>
        <div>
          <div className="staff_entry_container">
            <div />
            <input
              className="staff_entry first"
              onChange={e => this.setState({ fullname: e.target.value })}
              placeholder="Full Name"
              value={user.fullname}
            />
            <input
              className="staff_entry last"
              onChange={e => this.setState({ username: e.target.value })}
              placeholder="Last Name"
              value={user.username}
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