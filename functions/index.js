const functions = require('firebase-functions');
// const accountSid = 'AC3ceaa1fdbfdd698c5e460e9cea640062';
// const authToken = 'your_auth_token';
//const client = require('twilio')(accountSid, authToken);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.ToldYa = functions.https.onRequest((request, response) => {
  // client.messages
  // .create({body: 'Hi there! big ol test', from: '+14387943264', to: '+15144634193'})
  // .then(message => console.log(message.sid));
});