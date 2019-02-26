import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import './Login.scss';




class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.login = this.login.bind(this)
    }

    componentDidMount(){
        axios.get('/api/user')
            .then(res => {
                if(res.data.user) {
                    //checking if user object data exsists 
                    console.log(res.data.user)
                    //boot to other page
                    this.props.history.push('/private');
                // boot to other page
                    }
                })                
                    .catch(err => {
                        console.log(err)
                    })
                }
        
    handleChange(prop, val) {
        this.setState({
            [prop]:val
        })
    }
    login(){
        const { username, password } = this.state;
        axios.post('/auth/login', {username, password})
            .then(res => {
                this.props.updateUser(res.data)
                this.props.history.push('/private')
            })
            .catch(err => {
                console.log(err);
            })
    }



    

    render() {
        const {username, password } =this.state;
        
          

        return (
           
                <div className='login-wrap'>
                    <form class='form'>
                    <input
                        type= 'text'
                        name= 'un'
                        value={username}
                        placeholder="Username"
                        onChange={e => this.handleChange('username', e.target.value)}
                    />   
                    <input
                        type='password'
                        name='pw'
                        value={password}
                        onChange={e => this.handleChange('password', e.target.value)}
                    /> 
                    <a href="#"><p> Don't have an account? Register </p> </a>
                    <button onClick={this.login}>Login</button>
                    </form>
                </div>
                
    
        );
    
    } 
    }
    

export default Login
