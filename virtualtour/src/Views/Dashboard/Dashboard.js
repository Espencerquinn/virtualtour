import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import {updateUser} from './../../ducks/reducer';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import Album from '../../Components/Album/Album'
import AppHeader from '../../Components/AppHeader/AppHeader'
import './Dashboard.css';

const styles = theme => ({
    card: {
      maxWidth: 400,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  });
  


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            propertyList:[],
            id: '{user.id}',
            firstname: '',
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
        this.deleteProperty = this.deleteProperty.bind(this)
    }

    componentDidMount(){
      this.getUsers()
    }
  
    getUsers(){
      console.log("hit")
      axios.get('/api/private/getUser')
          .then((res) => {
            console.log("SESSION", res.data.user)
              this.setState({user: res.data.user})
          })
          axios.get('/api/properties')
            .then((res) => {
                this.setState({
                    propertyList: res.data
                })
            })
          .catch(err => console.log("error:". err))
          
    
        }

    handleChange(prop, val) {
        this.setState({
            [prop]:val
        })
    }

    logout = () => {
      axios.post('/auth/logout')
      .then(res => {
          // this.props.updateUser({});
          this.props.history.push('/');
      })
      .catch(err => {
          console.log(err)
      })
  }
 

    deleteProperty(id){
        axios.delete(`/api/properties/${id}`)
        .then((res) => {
            this.setState({
                houseList: res.data
            })
        })
    }

    render() {
    console.log(this.state)
    const {classes} = this.props;
    const {propertyList, user, firstname}= this.state
    console.log("user",this.state.user)
    console.log(propertyList)
        return (
            <div>
            <AppHeader
            logoutFn={this.logout}
            />
            <Album
            deletePropertyFn={this.deleteProperty}
            propertyList={propertyList}
            userFirstName={user.firstname}
            />
            </div> 
        )  
    
        
    
    }
}
Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Dashboard);
  