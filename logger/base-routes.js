const baseRoutes = {
  register: (server, options, next) => {
    server.route({
      method: 'GET',
      path: '/',
      handler: (request, reply) => {
        // console.log(request)
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
