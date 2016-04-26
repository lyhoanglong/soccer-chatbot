import * as axios from 'axios';

module.exports = [{
  method: 'GET',
  path: '/webhook/',
  config: {
    description: 'webhook for facebook',
    handler: {
      async: async function(req, reply) {
        try {
          if (req.query['hub.verify_token'] === 'QAoi9ft8PgQn(A') {
            let text = req.query['hub.challenge'];
            return reply(text);
          }

          return reply('Error, wrong token');
        } catch (e) {
          console.log(e.stack);
          return reply(e.message);
        }
      }
    }
  }
}, {
  method: 'POST',
  path: '/webhook/',
  config: {
    description: 'response to client',
    handler: {
      async: async function(req, reply) {
        try {
          console.log(req.payload);
          let message_events = req.payload.entry[0].messaging;

          for (let event of message_events) {
            let sender = event.sender.id;
            if (event.message && event.message.text) {
              axios.post('https://graph.facebook.com/v2.6/me/messages?access_token=EAAHAXf0aWBoBADOs3U7KHRoBdbfQMC2UXzI9Fh4B1g9nUqfALe51awauK9ZAnuYOYU8cMWke6cZAVZCi1VnXdIhVlZAG0A2BIxTBKjAtyM0fnwRQo26bZAi9X7HCqXGkBwHo0mfHXyWcHL8gMJLJBUmkv314ZBI3GgZAH3xdtbTiAZDZD', {
                recipient: {
                  id: sender
                },
                message: {
                  text: 'You said: ' + event.message.text
                }
              }).then(response => {
                console.log(response);
              }).catch(response => {
                console.log(response);
              });
            }
          }
          return reply().code(200);
        } catch (e) {
          console.log(e.stack);
          return reply(e.message);
        }
      }
    }
  }
}];