const rewire = require('rewire');
const sinon = require('sinon');
const Service = rewire('./service');

// rewire
const name = Service.__get__('name');
const serviceMock = {
	name: function() {
		console.log('I am a mock name');
	},
	show: () => {
		console.log('I am a mock show');
	}
}
Service.__set__('Service.prototype', serviceMock);
console.log(Service);
Service.show()

// sinon

// const sandbox = sinon.sandbox.create();
// sandbox.stub(Service, 'show');

// Service.show();
// sinon.assert.calledOnce(Service.show);
// sandbox.restore()

// const mock = sinon.mock(Service);
// mock.expects(name).once().throws();