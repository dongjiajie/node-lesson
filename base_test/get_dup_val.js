const _ = require('lodash');

function getDuplicateVal(array) {
  return _.uniq(
    _.filter(array, (value, index, iterate) => _.includes(iterate, value, index + 1)));
}

const a = [1, 2, 3];
const b = [1, 1, 1, 1,2];

console.log(getDuplicateVal(a));
console.log(getDuplicateVal(b));
_.filter(b, (value, index, iterate) => {
	console.log(iterate);
	console.log(value);
	return _.includes(iterate, value, index + 1)
});