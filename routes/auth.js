var express = require('express');
var router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const { registerValidation2} = require('../validation');




router.get('/', async(req, res)=> {
	res.send('Regiter page')
});


router.post('/',async(req, res)=> {
	//DATA VALIDATE BEFORE MAKE A USER
	console.log(req.body);
		//hash password
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(req.body.password, salt);
	//Create a new user
	const user = new User({
		name:req.body.name,
		email:req.body.email,
		password:hashPassword,
	});
const { error } = registerValidation2(req.body);
	if (error) return res.status(400).send(error.details[0].message);
	//check user in db 
	const emailExist = await User.findOne({email:req.body.email});
	if (emailExist) return res.status(400).send("email alredy exists");


	try {
			const savedUSer = await user.save();
			res.send({user:user._id});
		} catch (error) {
			 res.status(400).send(error);
		}
});
module.exports = router;
