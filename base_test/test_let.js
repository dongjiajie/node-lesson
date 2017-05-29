function cat(catName) {
	catName = 'cat'
	return 1
}

// function dog(dogName) {
// 	dogName = 'dog';
// 	return 2
// } 

function people() {
	let pet = 'small_white'
	cat(pet)
	console.log(pet);
}

// people()

function showMoney() {
	const money = [1, 2, 3, 4, 500];

	try {
		for(let i = 0; i < money.length; i++) {
			console.log(money[i]);
		};
		const log = `cannot read i: ${i}`;
	} catch(error) {
		console.log(error.message);
	}

	try {
		for(const l = 0; l < money.length; l++) {
			console.log(money[l]);
		}
	} catch(error) {
		console.log(error.message);
	}

	try {
		const m = 3;
		for(let i = 0; i < m; i++) {
			console.log(money[i]);
		}
	} catch(error) {
		console.log(error.message);
	}

	try {
		for(var l = 0; l < money.length; l++) {
			console.log(money[l]);
		}
	} catch(error) {
		console.log(`My value is l = ${l}`);
	}

}

showMoney();