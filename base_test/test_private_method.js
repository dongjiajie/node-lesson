const name = 'Dog';

function age() {
	console.log('I am 10 years old.');
}

const a = age();

class Pet {
	static show() {
		console.log('It is my pet.');
		return 'show';
	}
}

Pet.show();
console.log(Pet.name);
Pet.a;
