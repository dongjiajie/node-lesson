const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('../package');
const Joi = require('joi')

const server = new Hapi.Server();
server.connection({
        host: 'localhost',
        port: 3000
    });

const options = {
    info: {
            'title': 'Test API Documentation',
            'version': Pack.version,
        }
    };

server.register([
    Inert,
    Vision,
    {
        'register': HapiSwagger,
        'options': options
    },
    require('hapi-auth-jwt2')], (err) => {
        server.start( (err) => {
           if (err) {
                console.log(err);
            } else {
                console.log('Server running at:', server.info.uri);
            }
        });
    });

server.route([
	{
    method: 'GET',
    path: '/{name}',
    config: {
      handler: function (request, reply) {
      	reply('Hello World.I am ' + request.params.name);
      },
      description: 'Say Hello',
      notes: 'Say hello to world and return your name.',
      tags: ['api', 'get_name'],
      validate: {
        params: {
          name : Joi.string()
                  .required()
                  .description('the name of yourself'),
        }
      }
    },
	},
	{
    method: 'POSt',
    path: '/post',
    config: {
      handler: function (request, reply) {
      	reply('I am POST.');
      },
      description: 'POST method',
      notes: 'Return http method name',
      tags: ['api', 'post_method'],
    },
	},
	{
    method: 'GET',
    path: '/search',
    config: {
      handler: function (request, reply) {
      	const val = request.query.name;
      	console.log(request.query);
      	reply(`Query: ${val}`);
      },
      description: 'Search by url parameters',
      notes: 'Seach',
      tags: ['api'],
    },
	},
  {
    method: 'POST',
    path: '/items',
    config: {
        handler: (request, reply) => { reply('OK'); },
        tags: ['api'],
        validate: {
            payload: Joi.object({
                a: Joi.number(),
                b: Joi.number()
            })
        }
    }
  },
  {
    method: 'GET',
    path: '/items/{pageNo}',
    config: {
        handler: (request, reply) => { reply('OK'); },
        tags: ['api'],
        validate: {
            params: {
                pageNo: Joi.number()
            },
            query: {
                search: Joi.string()
            },
            headers: Joi.object({
                'authorization': Joi.string().required()
            }).unknown()
        }

    }
}
	]);
