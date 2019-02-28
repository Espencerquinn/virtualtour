import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './UpdateProfile.scss';




// import Review from './Review';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});




class UpdateProfile extends React.Component {
  


  render() {
    console.log('Props',this.props)
    const { classes } = this.props;
    const { id, userfirstname, userlastname, userusername, userphonenumber, useremail, updateUserFn, handleChangeFn, userProfilePic } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
        
          <Paper className={classes.paper}>
            <img className="userpic"src={userProfilePic}></img>
            <Typography component="h1" variant="h5" align="center">
              UpdateProfile
            </Typography>
            <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  placeholder={userfirstname}
                  fullWidth
                  autoComplete="fname"
                  onChange={ e => handleChangeFn('firstname', e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                placeholder={userlastname}
                label="Last Name"
                fullWidth
                autoComplete="lname"
                onChange={ e => handleChangeFn('lastname', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="Username"
                name="Username"
                placeholder={userusername}
                label="Username"
                fullWidth
                autoComplete="Username"
                onChange={ e => handleChangeFn('username', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="Email"
                name="Email"
                placeholder={useremail}
                label="Email"
                fullWidth
                autoComplete="Email"
                onChange={ e => handleChangeFn('email', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="PhoneNumber"
                name="PhoneNumber"
                placeholder={userphonenumber}
                label="Phone Number"
                fullWidth
                autoComplete="Phone Number"
                onChange={ e => handleChangeFn('phonenumber', e.target.value)}
              />
            </Grid>
            <React.Fragment>
                
              
                <React.Fragment>
                  <div className={classes.buttons}>
                      <Button onClick={this.handleBack} className={classes.button}>
                        Cancel
                      </Button>
                  
                    <Button 
                      variant="contained"
                      color="primary"
                      type="button"
                      onClick={this.handleNext}
                      className={classes.button}
                      onClick={() =>updateUserFn(id)}
                      
                    >Save
                    </Button>
                  </div>
                </React.Fragment>

            </React.Fragment>
            </Grid>
          </Paper> 
        </main>
      </React.Fragment>
    );
  }
}

UpdateProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UpdateProfile);