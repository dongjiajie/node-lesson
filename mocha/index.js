const mocha = require('mocha');

let describe;
let it;

mocha.before((done) => {
	describe = mocha.describe;
	it = mocha.it;
	done();
})

module.exports = {
	describe,
	it
}