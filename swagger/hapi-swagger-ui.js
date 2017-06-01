var Hapi = require('hapi')
const Joi = require('joi');

var server = new Hapi.Server()
server.connection({
  port: 8000,
  labels: ['api']
})

server.register([
  require('inert'),
  require('vision'),
  {
    register: require('hapi-swaggered'),
    options: {
      tags: {
        'foobar/test': 'Example foobar description'
      },
      info: {
        title: 'Example API',
        description: 'Powered by node, hapi, joi, hapi-swaggered, hapi-swaggered-ui and swagger-ui',
        version: '1.0'
      }
    }
  },
  {
    register: require('hapi-swaggered-ui'),
    options: {
      title: 'Example API',
      path: '/docs',
      authorization: {
        field: 'apiKey',
        scope: 'query', // header works as well
        // valuePrefix: 'bearer '// prefix incase
        defaultValue: 'demoKey',
        placeholder: 'Enter your apiKey here'
      },
      swaggerOptions: {
        validatorUrl: null
      }
    }
  }], {
    select: 'api'
  }, function (err) {
  if (err) {
    throw err
  }

  server.route({
    path: '/',
    method: 'GET',
    config: {
      handler: function (request, reply) {
        reply.redirect('/docs')
      },
      tags: ['api']
    }
  })

  server.route({
    path: '/',
    method: 'POST',
    config: {
      handler: function (request, reply) {
        reply(request.payload);
      },
      tags: ['api'],
      validate: {
        query: {
          id: Joi.number().required(),
        },
        payload: Joi.object().keys({
          name: Joi.string().required(),
          age: Joi.number(),
          sex: Joi.string().when('age', { is: 1, then: Joi.required() })
        }).with('name', ['age'])
      }
    }
  })

  server.start(function () {
    console.log('started on http://localhost:8000')
  })
})