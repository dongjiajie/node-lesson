const promise = new Promise(function(resolve){
    resolve(42);
});

// promise.then(function(value){
//     console.log(value);
// }).catch(function(error){
//     console.error(error);
// });

function dog() {
	return new Promise((resolve, reject) => {
    resolve('small_white');
	})
}

// dog().then((value) => {
// 	console.log(value);
// })

module.exports = dog;
