const mocha = require('mocha');
const dog = require('./dog.js');

const describe = mocha.describe;
const it = mocha.it;
const before = mocha.before;

let name = 'hello kitty';

function showName() {
	dog().then((data) => {
			console.log(`data: ${data}`);
			name = data;
		}).catch((error) => {
			console.log(error);
		});
}

async function getName() {
	name = await dog();
}

describe('#dog', () => {
	// before((done) => {
	// 	// name = 'red nose';
	// 	const res = showName();
	// 	done();
	// });

	before((done) => {
		dog().then((data) => {
			name = data;
			done();
		}).catch((err) => {
			console.log(err);
			done();
		})
		// done();
	});

	// before((done) => {
	// 	getName();
	// 	done();
	// })

	it('show dog name', (done) => {
		console.log(name);
		done();
	});
})