const Twilio = require('twilio');

const client = new Twilio(
    "xxxx",
    "xxxx"
    );

client.messages
.list()
.then(messages => console.log(`The most recent message is ${messages[0].body}`))
.catch(err => console.error(err));
console.log('Gathering message log');