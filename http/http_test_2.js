var http = require("http");
var options = {
  hostname: 'localhost',
  port: 3010,
  path: '/',
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
  }
};
var req = http.request(options);
// write data to request body

req.write('{"string": "Hello, World"}');
req.end();