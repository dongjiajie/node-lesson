const baseRoutes = {
  register: (server, options, next) => {
    server.route({
      method: 'GET',
      path: '/',
      handler: (request, reply) => {
        // request.log(['info', 'test', 'error'], 'Test event');
        reply('Hello World!')
      }
    })

    next()
  }
}

baseRoutes.register.attributes = {
  name: 'base-routers',
  version: '1.0.0'
}

module.exports = baseRoutes
