// @flow
const str: string = "hello";
const num: number = 10;
const obj: Object = {val: 'val'};

// '?' it can receive number or string or null
function opt(hi: ?number|string) {
	return hi;
}

console.log(opt(num));
console.log(opt(str));
console.log(opt(null));
console.log(opt());