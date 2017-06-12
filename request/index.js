const request = require('request');
const url = 'http://qa.services.theknot.com/registry/v1/couples/5312641?apikey=ca7f6e91ee8134de9717707d86b29100';
// request(url, function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred 
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
//   console.log('body:', body); // Print the HTML for the Google homepage. 
// });

async function show(url){
	// request(url, (error, response, body) => {
	//   // console.log('error:', error); // Print the error if one occurred 
 //  	console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
 //  	// console.log('body:', body); // Print the HTML for the Google homepage. 
 //  	return body;
	// })
	const res = await request.get(url).pipe(console.log());
	console.log(res)
}

show(url)
	.then((resp) => {
		console.log(resp)
	})
	.catch((err) => {
		console.log(err)
	})
