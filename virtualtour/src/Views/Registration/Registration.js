import React, {Component} from 'react';
import axios from 'axios';
import { v4 as randomString } from 'uuid';
import Dropzone from 'react-dropzone';
import { GridLoader } from 'react-spinners';
import { connect } from 'react-redux';
import RegistrationForm from '../../Components/Registration/RegistrationForm'
import {registerUser}  from '../../ducks/reducer'

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            phonenumber:'',
            password: '',
            isUploading: false,
            url: 'http://via.placeholder.com/450x450'
        };
        this.registerUser = this.registerUser.bind(this)
    }

getSignedRequest = ([file]) => {
        console.log('hit')
        this.setState({ isUploading: true });
        // We are creating a file name that consists of a random string, and the name of the file that was just uploaded with the spaces removed and hyphens inserted instead. This is done using the .replace function with a specific regular expression. This will ensure that each file uploaded has a unique name which will prevent files from overwriting other files due to duplicate names.
        const fileName = `${randomString()}-${file.name.replace(/\s/g, '-')}`;

     // We will now send a request to our server to get a "signed url" from Amazon. We are essentially letting AWS know that we are going to upload a file soon. We are only sending the file-name and file-type as strings. We are not sending the file itself at this point.
        axios
        .get('/api/signs3', {
            params: {
                'file-name': fileName,
                'file-type': file.type,
            },
        })
        .then(response => {
        const { signedRequest, url } = response.data;
        this.uploadFile(file, signedRequest, url);
        })
        .catch(err => {
        console.log(err);
        });
    };

uploadFile = (file, signedRequest, url) => {
    const options = {
      headers: {
        'Content-Type': file.type,
      },
    };

    axios
      .put(signedRequest, file, options)
      .then(response => {
        this.setState({ isUploading: false, url });
        
      
        // THEN DO SOMETHING WITH THE URL. SEND TO DB USING POST REQUEST OR SOMETHING
      })
      .catch(err => {
        this.setState({
          isUploading: false,
        });
        if (err.response.status === 403) {
          alert(
            `Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n${
              err.stack
            }`
          );
        } else {
          alert(`ERROR: ${err.status}\n ${err.stack}`);
        }
      });
  };

registerUser(){
  console.log(this.state)
  console.log('hit register')
  axios.post('/api/registerUser',
  {
    firstname:this.state.firstname,
    lastname:this.state.lastname,
    username: this.state.username,
    email: this.state.email,
    phonenumber: this.state.phonenumber,
    password:this.state.password,
    url: this.state.url
  })
  // console.log('testing')
  .then(res => {
    console.log(res.data)
  })
  .catch(err => {
    console.log(err);
  })
}

    

    // componentDidMount(){
    //     const { id } = this.props;
    //     if(id) {
    //             //boot to other page
    //             this.props.history.push('/private');
    //     } else {
    //             //double check sessions 
    //         axios.get('/api/user')
    //         .then(res => {
    //             // boot to other page
    //             this.props.updateUser(res.data);
    //             this.props.history.push('/private')
    //         })
    //         .catch(err => {
    //             //don't move 
    //         })
    //     }
    // }

    
    

    handleChange(prop, val) {
        this.setState({
            [prop]:val
        })
    }
  
  
    render() {
        const {url, isUploading, firstname, lastname, username, email, phonenumber, password } =this.state;
        return (
          <div className='Login'>
            <RegistrationForm
              getSignedRequestFn={this.getSignedRequest}
              handleChangeFn={this.handleChange}
            />
                <input
                    value={firstname}
                    onChange={e => this.handleChange('firstname', e.target.value)}
                    placeholder= "First Name"
                    attrurl= {this.url}
                    attrisUploading={this.isUploading}
                /> 
                <input
                    value={lastname}
                    onChange={e => this.handleChange('lastname', e.target.value)}
                    placeholder= "Last Name"
                />
                <input
                    value={username}
                    onChange={e => this.handleChange('username', e.target.value)}
                    placeholder= "username"
                />
                <input
                    value={email}
                    onChange={e => this.handleChange('email', e.target.value)}
                    placeholder= "email"
                />
                <input
                    value={phonenumber}
                    onChange={e => this.handleChange('phonenumber', e.target.value)}
                    placeholder= "phone number"
                />
                <input
                    value={password}
                    onChange={e => this.handleChange('password', e.target.value)}
                    placeholder= "password"
                />      
                <button onClick={this.registerUser}>Create New User</button>
            
                <h1>Upload</h1>
                 <h1>{url}</h1>
                <img src={url} alt="" width="450px" />



                <Dropzone 
                onDropAccepted={this.getSignedRequest}
                style={{
                  height: 200,
                    borderWidth: 7,
                    marginTop: 100,
                    borderColor: 'rgb(102, 102, 102)',
                      position: 'relative',
                    width: 200,
                    borderStyle: 'dashed',
                    borderRadius: 5,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 28,
                  }}
                  accept="image/*"
                  multiple={false}
                >

                {({getRootProps}) => (
                  <div {...getRootProps()}>
                    {isUploading ? <GridLoader 
                    /> : <p>Drop File or Click Here</p>}
                  </div>
                )}
              </Dropzone>



            </div>
        )
    }
}

let mapDispatchToProps = {
  registerUser
}


export default connect (null, mapDispatchToProps)(Registration);