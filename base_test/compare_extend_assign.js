_ = require('lodash');

console.log('lodash extend');
console.log(Date.now());
console.log(_.extend({}, {a:'a'}, {b:'b'}, {c:'c'}, {d:'d'}, {e:'e'}));
console.log(Date.now());

console.log('lodash assign');
console.log(Date.now());
console.log(_.assign({}, {a:'a'}, {b:'b'}, {c:'c'}, {d:'d'}, {e:'e'}));
console.log(Date.now());

console.log('Object assign');
console.log(Date.now());
console.log(Object.assign({}, {a:'a'}, {b:'b'}, {c:'c'}, {d:'d'}, {e:'e'}));
console.log(Date.now());

// Object.assign ≈ lodash.assign > lodash.extend