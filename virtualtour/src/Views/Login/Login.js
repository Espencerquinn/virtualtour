import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import {updateUser} from './../../ducks/reducer';

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
            <div className='Login'>
                <input
                    value={username}
                    onChange={e => this.handleChange('username', e.target.value)}
                />   
                <input
                    type='password'
                    value={password}
                    onChange={e => this.handleChange('password', e.target.value)}
                />   
                <button onClick={this.login}>Login</button>

            </div>
        )
    }
}
//State aka data
const mapStateToProps = reduxState => {
    return {
        id: reduxState.id
    }
}
//Methods aka actions 
const dispatch = {
    updateUser: updateUser
}

export default connect(mapStateToProps, dispatch)(Login);