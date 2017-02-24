const sinon = require('Sinon');

class Dog{
	hotDog(num) {
		const price = 2.5;
		return num * price;
	}
}

class Cat{
	static hotCat(num) {
		const price = 2.5;
		return num * price;
	}
}

const dog = new Dog();

const res_dog = dog.hotDog(10);
console.log(res_dog); // 25

// Stub instance method
sinon.stub(Dog.prototype, 'hotDog', () => 20);
const res_stub = dog.hotDog(10)
console.log(res_stub); // 20


const res_cat = Cat.hotCat(10);
console.log(res_cat); // 25

// Stub class method
sinon.stub(Cat, 'hotCat', () => 20);
const res_cat_stub = Cat.hotCat(10);
console.log(res_cat_stub);  // 20
