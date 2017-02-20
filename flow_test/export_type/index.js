// @flow
import type {a} from './a_type';
import type {b} from './b_type';

type c = {
	name: a
}

const val1: a = { a: 'a'};
const val2: b = { b: 'b'};
const val3: c = { name: {a:'a'} }


console.log(val1);
console.log(val2);
console.log(val3);