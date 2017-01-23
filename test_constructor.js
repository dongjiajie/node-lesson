const wm = new WeakMap();

class HelpMethod{
	constructor(){
		const a = "i am wm in constructor"
		wm.set(this, a);
	}
	static async sayHi(){
		const res = await wm.get(this);
		console.log(`Hi: ${res}`);
	}

	async sayHello(){
		const res = await wm.get(this);
		console.log(`Hello: ${res}`);
	}

	hello(){
		const res = wm.get(this);
		console.log(`Hello: ${res}`);
	}
}

module.exports = HelpMethod;

// hm = new HelpMethod();
// hm.sayHello();
// HelpMethod.sayHi();