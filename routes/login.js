var express = require('express');
var router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {loginValidation} = require('../validation');


router.get('/', async(req, res)=> {
	res.send('Login page')
});


router.post('/', async(req, res)=> {
	//DATA VALIDATE BEFORE MAKE A USER
	const { error } = loginValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	//check user in db 
	const user = await User.findOne({email:req.body.email});
	if (!user) return res.status(400).send("email is not found");
	//Password is correct
	const validPass = await bcrypt.compare(req.body.password, user.password);
	if (!validPass) res.status(400).send("invalid password");

	//CREATE A TOKEN
	const token = jwt.sign({_id:user._id}, process.env.TOKEN_SECRET);
	res.header('auth-token',token).send(token);

	res.end("Loggen in");

});
module.exports = router;
