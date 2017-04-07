const sinon = require('sinon');
const Dog = require('./dog');
const People = require('./people');
const people = new People();

const mock = sinon.mock(people);

mock.expects('showName').returns('aa');

console.log(people.showName());
console.log(mock.verify());
