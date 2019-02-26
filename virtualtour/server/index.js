require("dotenv").config();
const express = require("express");
const massive = require("massive");
const ctrl = require('./controller');
const sessions = require('express-session')

const { SERVER_PORT, DB_CONNECTION, SESSION_SECRET, SID, AUTH } = process.env;

const app = express();

//setting up twilio 

const accountSid = SID;
const authToken = AUTH;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Is this working',
     from: '+14804053025',
     to: '+4804031577'
   })
  .then(message => console.log(message.sid));



//setting up sessions

app.use(express.json());
app.use(
    sessions({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    maxAge: null
    })
);

massive(DB_CONNECTION).then(db => {
  app.set('db', db);
  app.listen(SERVER_PORT, () =>
    console.log(`Houston we have lift off on port ${SERVER_PORT}`)
  );
});

//aws backend 

const aws = require('aws-sdk');

const { S3_BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } = process.env;

app.get('/api/signs3', (req, res) => {
  aws.config = {
    // region: 'us-west-1',
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  };

  const s3 = new aws.S3();
  const fileName = req.query['file-name'];
  const fileType = req.query['file-type'];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read',
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
    };

    return res.send(returnData);
  });
});

//properties
app.get('/api/properties', ctrl.getProperties)
app.delete('/api/properties/:id', ctrl.deleteProperty)

//update user info
// app.put('/api/user/{id}', ctrl.updateUser)
app.get('/api/private/getUser', ctrl.getUser)
app.put(`/api/user/:id`, ctrl.updateUser)
app.post('/api/registerUser', ctrl.registerUser)

//authentication
// app.post("/auth/register", ctrl.register);
app.post('/auth/login', ctrl.login);
app.post('/auth/logout', ctrl.logout);
app.get('/api/user', ctrl.getUser);