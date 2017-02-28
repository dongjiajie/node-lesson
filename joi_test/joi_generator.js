const Joi = require('joi');
const generate = new require('joi-generate').Generate();

const schema = Joi.object({
	name: Joi.string().min(1).max(10),
	sex: Joi.string().min(1).max(1),
	details: Joi.string().min(10).max(200),
});

generate(schema, (err, model) => {
	const res = err ? err.message : model;
	console.log(res);
})

