module.exports = [{
  method: 'GET',
  path: '/webhook/',
  config: {
    description: 'webhook for facebook',
    handler: {
      async: async function(req, reply) {
        if (req.payload('hub.verify_token') === 'QAoi9ft8PgQn(A') {
          return reply(req.payload('hub.challenge'));
        }

        return reply('Error, wrong token');
      }
    }
  }
}]