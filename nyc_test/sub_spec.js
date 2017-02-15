const lab = exports.lab = require('lab').script();
const Code = require('code');
const sinon = require('sinon');
const Sub = require('./sub');

const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

describe('#Sub', () => {
	it('a > b', (done) => {
		result = Sub.sub(5, 3);
		expect(result).to.equal(2);
		done();
	});

	it('b > a', (done) => {
		result = Sub.sub(3, 5);
		expect(result).to.equal(2);
		done();
	})

	it('a = b', (done) => {
		result = Sub.sub(5, 5);
		expect(result).to.equal(0);
		done();
	})
})