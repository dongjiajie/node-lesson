// @flow

const a: string[] = [];
a.push('a');
console.log(a);

const b: Array<number> = [];
b.push(1)
console.log(b);

type Foo = { name: string, hobbit: ['a'] | ['b'] };
const c: Foo = { name: 'Black_J', hobbit: ['a'] };
console.log(c);

function show(profile: Foo) {
	console.log(profile);
}

show({ name: 'Black_J', hobbit: ['a'] });
