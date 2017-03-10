var p1 = new Promise((resolve, reject) => {
	console.log('p1');
  setTimeout(() => {resolve('a')}, 1000); 
}); 
var p2 = new Promise((resolve, reject) => { 
	console.log('p2');
  setTimeout(() => {resolve('b')}, 2000); 
});
var p3 = new Promise((resolve, reject) => {
	console.log('p3');
  setTimeout(() => {resolve('c')}, 3000);
});
var p4 = new Promise((resolve, reject) => {
	console.log('p4');
  setTimeout(() => {resolve('d')}, 4000);
});

Promise.all([p1, p2, p3, p4]).then(values => { 
  console.log(values);
  console.log('p5');
}, reason => {
  console.log(reason)
});

// p1.then(p2.then(p3.then(p4.then(val => {console.log(val);}))))

// async function test(){
// 	await p1;
// 	await p2;
// 	await p3;
// 	await p4;
// };

// test()