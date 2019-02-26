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
            houseList:[],
            expanded: false
        }
        this.deleteProperty = this.deleteProperty.bind(this)
    }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
      };

    handleChange(prop, val) {
        this.setState({
            [prop]:val
        })
    }

    componentDidMount(){
        // const rent = this.props.match.params.rent || ''
        axios.get('/api/properties')
            .then((res) => {
                this.setState({
                    houseList: res.data
                })
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
    const {classes} = this.props;
    const properties = this.state.houseList.map((obj, deleteProperty) => {
        return (<div key={obj.id} className={obj.name}>
            
            <div className="cardTiles">
            <Card className={classes.card}>
            <CardHeader
              avatar={
                   <Avatar aria-label="Recipe" className={classes.avatar}>
                      {obj.id}
                    </Avatar>
              }
              action={
            <IconButton>
            
            </IconButton>
              }
              title={obj.name}
              subheader={obj.price}
          
            />
            <CardMedia
            className={classes.media}
            image ="https://nationalmortgageprofessional.com/sites/default/files/Luxury_Home_05_15_18.jpg"
            title={obj.id}
            />
            <CardContent>
          <Typography component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <DeleteIcon 
              onClick={() => this.deleteProperty(obj.id)}
            />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
              minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
              chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
              salt and pepper, and cook, stirring often until thickened and fragrant, about 10
              minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
              without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat
              to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don’t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
            </Card>
        </div>
            <h1>{obj.name}</h1>
            <ul>
                <div>{obj.id}</div>
                <li>{obj.name}</li>
                <li>{obj.address}</li>
                <li>{obj.city}</li>
                <button>3D Walkthrough</button>
                <button
                className='card-button'
                onClick={() => this.deleteProperty(obj.id)}>delete</button>
            </ul>
            </div> 
        )  
    })
        return (

            <div className='dashboard'>
                <div className= "main">{properties} </div>
            
            <div className='sidenav'>
                <Link to ='/private/updateuser'><button>update profile</button></Link>
                <button>add new property</button>
                <button>rent vr kit</button>
            </div>
            <div className='footer'>

            </div>
            </div>

        )
    
    }
}
Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Dashboard);
  