import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {connect} from 'react-redux'
import {registerUser} from '../../ducks/reducer'



function AddressForm() {

  // firstName (e) {
    // this.props.registerUser({firstName: e.target.value})}

  return (

    
  
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
            // onChange={(e) => this.firstName(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
            // onChange={e => handleChangeFn('lastname', e.target.value)}

          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Username"
            name="Username"
            label="Username"
            fullWidth
            autoComplete="Username"
            // onChange={e => handleChangeFn('username', e.target.value)}

          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Email"
            name="Email"
            label="Email"
            fullWidth
            autoComplete="Phone Number"
            // onChange={e => handleChangeFn('email', e.target.value)}

          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Phone Number"
            name="Phone Number"
            label="Phone Number"
            fullWidth
            autoComplete="Phone Number"
            // onChange={e => handleChangeFn('phonenumber', e.target.value)}

          />
        </Grid>
       
        
        
      </Grid>
    </React.Fragment>
  );
}

let mapDispatchToProps = {
  registerUser
}

export default connect (null, mapDispatchToProps)(AddressForm);

