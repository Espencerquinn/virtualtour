import React, {Component} from 'react';
import axios from 'axios';
import LoginForm from '../../Components/Login Component/LoginForm'
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
        
    handleChange= (prop, val) => {
        this.setState({
            [prop]:val
        })
    }
    login(e){
        console.log('hit')
        // e.preventdefault()
        const { username, password } = this.state;
        axios.post('/auth/login', {username, password})
            .then(res => {
                // this.props.updateUser(res.data)
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
                     <LoginForm
                     loginFn={this.login}
                     handleChangeFn={this.handleChange}
                    //  username={this.user.username}
                    //  password={this.user.password}
                     />
                    <form
                       onsubmit={e => e.preventdefault()}
                    >
                    
                    </form>
                </div>
                
    
        );
    
    } 
    }
    

export default Login
