const sumologic = require('./sumologic');

class Info {
	static error(message) {
		const newMessage = `[${new Date()} - error] ${message}`
		console.log(newMessage);
		sumologic(message)
	}
}

module.exports = Info;