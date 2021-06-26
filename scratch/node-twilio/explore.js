require("dotenv").config();
const Twilio = require('twilio');

const client = new Twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
    );

client.messages
.list()
.then(messages => console.log(`The most recent message is ${messages[0].body}`))
.catch(err => console.error(err));
console.log('Gathering message log');