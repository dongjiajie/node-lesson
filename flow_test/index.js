// @flow
import type {couple} from "./export_type";

console.log('1----------------');
// const str: number = 'hello world!';
const str: string = 'hello world!';
console.log(str);

console.log('2----------------');
function foo(x) {
  if (typeof x === 'string') {
    return x.length;
  } else {
    return x;
  }
}

const res = foo('Hello') + foo(42);
console.log(res);

console.log('3----------------');
function DietClass(foo: string) {
  this.foo = foo;
}

const myDietClass: DietClass = new DietClass('a');
console.log((myDietClass: DietClass));
console.log((myDietClass.foo: string));

console.log('4、Generic----------------');
class myClass<T> {
	x: T;
	constructor(x: T) {
		this.x = x;
	}
}
const myRes1: myClass<string> = new myClass('foo');
const myRes2: myClass<number> = new myClass(1);
const myRes3: myClass<Object> = new myClass({a: 1});
console.log(`Generic for string: ${myRes1.x}`);
console.log(`Generic for number: ${myRes2.x}`);
console.log('Generic for object:', myRes3.x);


const cc: couple = { coupleUUID: 'a' }

console.log(cc);


