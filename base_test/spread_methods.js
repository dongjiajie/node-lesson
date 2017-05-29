const a = {a:'a'}
// const b = {...a}
console.log(a)

// array
const ar = [1, 2, 3, 4];
const val = [...ar];
console.log(val)

function dog(...name) {
	return name;
}

// three dot
const res = dog('a', 'b');
console.log(res);

console.log('=====');
const r = [].concat(...[1, 2, [3]]);
console.log(r);

console.log('===>');
const r1 = [].concat([1], [2], ...[3, ...[4, [5]]]);
console.log(r1);
