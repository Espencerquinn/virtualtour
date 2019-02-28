import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Dropzone from 'react-dropzone';
import { GridLoader } from 'react-spinners';

function Profile() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={24}>
      <Grid item xs={12}>
          <TextField
            required
            id="username"
            name="username"
            label="Create Username"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="password"
            name="password"
            label="Create Password"
            fullWidth
            autoComplete="password"
          />
        </Grid>
        
        {/* <Dropzone 
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
              </Dropzone> */}
        
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="I'm ready to be amazed"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Profile;