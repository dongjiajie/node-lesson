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
}

pet()
