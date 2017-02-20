//      

console.log('1----------------');
// const str: number = 'hello world!';
const str         = 'hello world!';
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
function DietClass(foo        ) {
  this.foo = foo;
}

const myDietClass            = new DietClass('a');
console.log((myDietClass           ));
console.log((myDietClass.foo        ));

console.log('4、Generic----------------');
class myClass    {
	     
	constructor(x   ) {
		this.x = x;
	}
}
const myRes1                  = new myClass('foo');
const myRes2                  = new myClass(1);
const myRes3                  = new myClass({a: 1});
console.log(`Generic for string: ${myRes1.x}`);
console.log(`Generic for number: ${myRes2.x}`);
console.log('Generic for object:', myRes3.x);


