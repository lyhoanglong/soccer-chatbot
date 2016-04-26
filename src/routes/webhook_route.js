module.exports = [{
  method: 'GET',
  path: '/webhook/',
  config: {
    description: 'webhook for facebook',
    handler: {
      async: async function(req, reply) {
        try {
          if (req.query('hub.verify_token') === 'QAoi9ft8PgQn(A') {
            return reply(req.query('hub.challenge'));
          }

          return reply('Error, wrong token');
        } catch (e) {
          console.log(e.stack);
          return reply(e.message);
        }
      }
    }
  }
}]