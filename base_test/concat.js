const a = [1, 2, 3, [4]];
const aa = [[5]]

const b = [].concat(...a);

const c = [...a, aa]

console.log(b)
console.log(c)