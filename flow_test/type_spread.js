// @flow

// type A = {
// 	foo: string,
// 	bar: number,
// };

// type B = {
// 	bar: boolean,
// };

// type C = {
// 	...A,
// 	...B
// }

// function spread(a: A) {
// 	if (a.bar == 1) {
// 		return 1;
// 	}
// }

// console.log(spread({foo: 'a', bar: 1}));

// type GetState = () => Object

// const str: GetState = () => { return {a:1} };

// type Convert<T> = (str: string) => T;

// const num: Convert<string> = () => { return 'a' }

// console.log(num());

// declare function takesOnlyOneNumber(x: number, y: string): Object;

// declare function foo(number): string;

// declare type bar = {
// 	coupleID: foo,
// }

// const str: bar = { coupleID: 1 }

// console.log(str);

type ConvertFn = (value: number) => number;

type res = {
	num: ConvertFn
}

const num = {
	num: (m) => m + 1,
}

console.log(num.num(1));




