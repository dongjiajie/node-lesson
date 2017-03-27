const Joi = require('joi');

const schema = Joi.array().unique((a,b) => {
	a.a.property === b.a.property
});

const schema2 = Joi.array().unique('a').unique('b')

const res = Joi.validate([{a:1,b:7},{a:2, b:1},3], schema2);

console.log(res);
