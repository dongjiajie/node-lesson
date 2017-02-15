const Joi = require('joi');

const base = Joi.object().keys({
	name: Joi.string(),
	age: Joi.number()
});

const extended = base.keys({
	age: Joi.number().min(18),
	sex: Joi.string()
});

const res1 = Joi.validate({name: 'Test_name', age: 19}, base);  // success
const res2 = Joi.validate({name: 'Test_name', age: 19, sex: 'male'}, base); // faile
const res3 = Joi.validate({name: 'Test_name', age: 19, sex: 'male'}, extended);  // success
const res4 = Joi.validate({name: 'Test_name', age: 17, sex: 'male'}, extended);  // faile

console.log('result1:');
console.log(res1);
console.log('result2:');
console.log(res2);
console.log('result3:');
console.log(res3);
console.log('result4:');
console.log(res4);