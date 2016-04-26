module.exports = [{
  method: 'GET',
  path: '/home',
  config: {
    description: 'Home route',
    handler: function(req, reply) {
      return reply({
        data: 'ngon'
      }).code(203);
    }
  }
}]