const Joi = require('joi');

const base = Joi.object().keys({
	name: Joi.string().required(),
	age: Joi.number(),
	nested: Joi.object().keys({
		food: Joi.string().required(),
	})
});

const optionalBase = base.optionalKeys('nested.food', 'name')

const res1 = Joi.validate({name: 'Test_name', age: 19, nested: {}}, optionalBase);  // success
console.log(res1);