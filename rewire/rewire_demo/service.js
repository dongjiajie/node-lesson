function name() {
	const val = 'i am name';
	console.log(val);
	return val;
}

class Service {
	static show() {
		console.log('show');
		name();
		return 'show';
	}
}

module.exports = Service;