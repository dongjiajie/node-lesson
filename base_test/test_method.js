class Test {
	constructor(id = 1, name = 'cat') {
		this.id = id;
		this.name = name;
	}

	show() {
		return this.name;
	}
}

const test = new Test(2, 'dog');

console.log(test.show());
