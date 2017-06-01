const name = 'small_white';
let age = 10;
function showName() {
	console.log(name);
	console.log(age);
	name = 'back_j'; // TypeError: Assignment to constant variable.
	age = 100;
	console.log(name);
	console.log(age);
}

// showName();


