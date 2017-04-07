const People = require('./people');
const people = new People();

class Dog {
	static dogName() {
		const res = people.showName('samll dog.');
		console.log(res);
	}
}

module.exports = Dog;
// Dog.dogName()