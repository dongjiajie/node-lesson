const _ = require('lodash');

const numToFind = 9876;
const arr = [];
for (let i = 0; i<10000; i++) {
  arr.push(i);
}

const t0 = Date.now();
console.log(t0);
numToFind in arr
const t1 = Date.now();
console.log(t1);

const t2 = Date.now();
console.log(t2);
_.includes(arr, numToFind)
const t3 = Date.now();
console.log(t3);