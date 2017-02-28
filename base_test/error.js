const Boom = require('boom');
const _ = require('lodash');

function err() {
	const e = new Error('it is a error.');
	return e;
}

if (_.isError(err())) {
	console.log(err().message);
}

const error = Boom.create(400, 'Bad Request');

console.log(error.output.statusCode);
