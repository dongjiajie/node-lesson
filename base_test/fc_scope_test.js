function dog (name) {
	let newName = name;
	newName = 'new dog';
	console.log('i am new name:', newName);
	console.log('i am origin name:', name);
	return newName;
}

function cat (name) {
	name = 'cat';
	return name;
}

function pet() {
	const name = 'small white'

	const dogName = dog(name);
	const catName = cat(name)

	console.log(name);
	console.log(dogName);
	console.log(catName);
	console.log(name);
}

// pet()

function showArray(ar) {
	ar.push(4);
	const newArray = ar.concat([5]);
	console.log(ar)
	return newArray;
}

function run() {
	const ar = [1, 2, 3];
	const result = showArray(ar);
	console.log(ar)
	console.log(result);
}

// run()

function face(options) {
	const newOptions = Object.assign({}, options);
	newOptions.age = 90;
	return newOptions;
}

function obj() {
	const options = {
		name: 'dog',
		sex: 'male'
	}

	face(options);
	console.log(options);
}

// obj();

