var Hapi = require('hapi');
const jwt = require('jsonwebtoken');
 
var people = { // our "users database" 
    1: {
      id: 1,
      name: 'Jen Jones'
    }
};
 
// bring your own validation function 
var validate = function (decoded, request, callback) {
    console.log(decoded)
 
    // do your checks to see if the person is valid 
    if (!people[decoded.id]) {
      return callback(null, false);
    }
    else {
      return callback(null, true);
    }
};
 
var server = new Hapi.Server();
server.connection({ port: 8000 });
        // include our module here ↓↓ 
server.register(require('hapi-auth-jwt2'), function (err) {
 
    if(err){
      console.log(err);
    }
 
    server.auth.strategy('jwt', 'jwt',
    { key: 'NeverShareYourSecret',          // Never Share your secret key 
      validateFunc: validate,            // validate function defined above 
      verifyOptions: { algorithms: [ 'HS256' ] } // pick a strong algorithm 
    });
 
    server.auth.default('jwt');

    server.route([
      {
        method: "POST", path: "/token", config: { auth: false },
        handler: function(request, reply) {
          const userId = request.payload.user.id;
          const user = people[userId];
          const token = jwt.sign(
            { id: user.id, password: user.name },
            "1123qwe",
            { algorithm: 'HS256', expiresIn: '1h' });
          reply(token);
        }
      },
      {
        method: "GET", path: "/", config: { auth: false },
        handler: function(request, reply) {
          reply({text: 'Token not required'});
        }
      },
      {
        method: 'GET', path: '/restricted', config: { auth: 'jwt' },
        handler: function(request, reply) {
          reply({text: 'You used a Token!'})
          .header("Authorization", request.headers.authorization);
        }
      }
    ]);
});
 
server.start(function () {
  console.log('Server running at:', server.info.uri);
});