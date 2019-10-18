var express = require('express');
var router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {loginValidation} = require('../validation');
const dotenv = require("dotenv");


dotenv.config();

router.get('/', async(req, res)=> {
	res.send('Login page')
});


router.post('/', async(req, res)=> {
	//DATA VALIDATE BEFORE MAKE A USER
	
	const { error } = loginValidation(req.body);
	if (error) {
		console.log(error.details[0].message);
		return res.status(400).send(error.details[0].message);}

	//check user in db 
	const user = await User.findOne({email:req.body.email});
	if (!user) {
		console.log("email is not found");
		return res.status(400).send("email is not found")};
	//Password is correct
	const validPass = await bcrypt.compare(req.body.password, user.password);
	if (!validPass)  {
		console.log("invalid password");
		return res.status(400).send("invalid password")};
console.log("Log in!");
res.redirect('api/addbooks');
	//CREATE A TOKEN
	const token = jwt.sign({_id:user._id}, process.env.TOKEN_SECRET);
	res.header('auth-token',token).send(token);

});
module.exports = router;
