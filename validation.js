const Joi = require('@hapi/joi');
// REGISTER VALIDATION
const registerValidation = data =>{	
	const schema = {
		author:Joi.string()
			.min(4)
			.required(),
		bookstitle:Joi.string()
			.min(2)
			.required(),
		discription:Joi.string()
			.min(6)
			.required(),
		price:Joi.number()
		.min(1)
		.required()		
	};
	return Joi.validate(data, schema);
}
const registerValidation2 = data =>{	
	const schema = {
		name:Joi.string()
			.min(4)
			.required(),
		email:Joi.string()
			.min(2)
			.email()
			.required(),
		password:Joi.string()
			.min(6)
			.required()		
	};
	return Joi.validate(data, schema);
}
const loginValidation = data =>{	
	const schema = {
		email:Joi.string()
			.min(6)
			.required()
			.email(),
		password:Joi.string()
			.min(6)
			.required()		
	};
	return Joi.validate(data, schema);
}
const bookSearchValidation = data =>{	
	const schema = {
		author:Joi.string()
			.min(3),
			discription:Joi.string()
			.min(5),
	};
	return Joi.validate(data, schema);
}


module.exports.registerValidation = registerValidation;
module.exports.registerValidation2 = registerValidation2;
module.exports.loginValidation = loginValidation;
module.exports.bookSearchValidation = bookSearchValidation;