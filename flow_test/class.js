// @flow
class MyClass {
  foo: string;
  constructor(foo: string) {
    this.foo = foo;
  }
  bar(): string {
    return this.foo;
  }
}

const myInstance: MyClass = new MyClass('a');
const res1 = (myInstance.foo: string);
const res2 = (myInstance.bar(): string);
console.log(`res1: ${res1}`);
console.log(`res2: ${res2}`);