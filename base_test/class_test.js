function fa() {
	console.log();
}

class test {
	constructor() {
		this.name = 'name-aa';
	}

	fb() {
		console.log(this.name);
		console.log('fb');
	}
}

const t = new test();
t.fb();