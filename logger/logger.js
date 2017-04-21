const Hapi = require('hapi')

const server = new Hapi.Server()
const uri = 'https://endpoint2.collection.us2.sumologic.com/receiver/v1/http/ZaVnC4dhaV0PazeV5jM5pTpEIs_su4hWQB_np7UBFwBAeAj6jWu_e7wlz98Rs1x2mOHoSTIU62Fq0bLWnpxIIdUHIGr2iijdwe5QBrFX8Z2PRYRHTOXFcQ=='

server.connection({
  host: 'localhost',
  port: 3000
})

// server.route({
//   method: 'GET',
//   path: '/',
//   handler: (request, reply) => {
//     reply('Hello World.')
//   }
// })

const goodOptions = {
  ops: {
    interval: 1000
  },
  reporters: {
    myConsoleReporter: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{ log: '*', response: '*' }]
    }, {
      module: 'good-console'
    }, 'stdout'],
    myFileReporter: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{ ops: '*' }]
    }, {
      module: 'good-squeeze',
      name: 'SafeJson'
    }, {
      module: 'good-file',
      args: ['./logs/awesome_log']
    }],
    myHTTPReporter: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{ log: '*', response: '*' }]
    }, {
      module: 'good-http',
      args: [uri, {
        wreck: {
          threshold: 1
        },
        threshold: 1
      }]
    }]
  }
}

server.register({
  register: require('good'),
  options: goodOptions
}, (err) => {
  if (err) return console.error(err)
})

server.register({
  register: require('./info')
})

server.register({
  register: require('./base-routes')
})

server.start((err) => {
  if (err) throw err

  console.log('Server running at: ' + server.info.uri)
})
