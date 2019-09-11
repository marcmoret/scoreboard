const functions = require('firebase-functions');
const Nexmo = require('nexmo');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
    const nexmo = new Nexmo({
      apiKey: '4cd3f7a6',
      apiSecret: 'YwXJ0akyN3EAzI0Z',
    });
    
    const from = '18732700804';
    const to = '15144634193';
    const text = 'Hello from Nexmo';
    
    nexmo.message.sendSms(from, to, text);
});