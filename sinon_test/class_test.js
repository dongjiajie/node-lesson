var sinon = require('sinon');
const Dog = require('./dog');

// exports.MyClass = function() {
//   this.a = 1;
// };

var spy = sinon.spy(Dog, 'apply');

var inst = new Dog();

console.log(spy.calledOnce); // true