const _ = require('lodash');

function err() {
	return new Error('it is a error.');
}

if (_.isError(err())) {
	console.log(err().message);
}