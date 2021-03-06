const express = require('express');
const app = express();
const port = 5555;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Books = require('./models/Books');
const { registerValidation, bookSearchValidation } = require('./validation');

dotenv.config();



mongoose.connect("mongodb://localhost:27017/Books",
	{ useUnifiedTopology: true,
	useNewUrlParser: true },
	(err)=> console.log(err));


app.use(express.json());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });

//route
routerRegValidation = require('./routes/auth');
routerLogValidation = require('./routes/login');
app.use('/register',routerRegValidation);
app.use('/login',routerLogValidation);

app.get("/", function(req, res){  
  res.send("Home Page!");
});


//midleware
app.use("/author/:name", async function(req,res,next){
	let name = req.params.name;
	const { error } = bookSearchValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);
	//check user in db 
	const authorExist = await Books.findOne({author:req.params.name});
	if (!authorExist) return res.status(400).send(`Author "${name}" is not found`);
	next();
});

//get all books use author name
app.get("/author/:name", function(req, res){  
	const author_name = req.params.name;
  	Books.find({author:author_name})
  	.then(data=>{
  		let x = data.map((item,index) =>{
  			let info = {
  				"book":index+1,
  				"Title":item.bookstitle,
  				"discription":item.discription,
  				"price":item.price
  			}
  			return info; 
  		})
    res.send(x);
  })
  .catch(err=>console.log(err));
  console.log("Succsessful");
});

app.get('/api/addbooks', async (req, res) => {
	let c = await Books.find();
	res.json(c);
	
});

app.post('/api/addbooks', async (req, res) => {
//BOOK VALIDATION 
console.log("addBooks body",req.body);
const { error } = registerValidation(req.body);
	if (error) return res.status(400).json({massage: error.details[0].message});
	//check user in db 
	const bExist = await Books.findOne({bookstitle:req.body.bookstitle});
	if (bExist) return res.status(400).json({massage:"This bookstitle alredy exists"});

const book = new Books({
		author:req.body.author,
		bookstitle:req.body.bookstitle,
		discription:req.body.discription,
		price:req.body.price,
	});
		try {
			const saveBook = await book.save();
			res.json({book:book._id});
		} catch (error) {
			 res.status(400).send(error);
		}
});
app.get("/edit", async function(req,res,next){
	
	console.log("bookid in node Get method",)
	res.json({message:"edit GEt page Node"})
});
app.get("/edit/:id", async function(req,res,next){
	const bookid = req.params.id;
	console.log("bookid in node Get method",bookid)
	res.json({message:"edit GEt page Node"})
});
//midleware
// app.use("/edit/:id", async function(req,res,next){
// 	const { error } = registerValidation(req.body);
// 	if (error) return res.status(400).send(error.details[0].message);
// 	//check user in db 
// 	const titleExist = await Books.findOne({bookstitle:req.body.bookstitle});
// 	if (titleExist) return res.status(400).json({message:"This bookstitle alredy exists"});
// 	next();
// });

// for Edit / Update Book status-work!(only POST methods?)
app.post("/edit/:id", function(req, res,next){
	console.log('node body',req.body)
  const bookid = req.params.id;
  Books.updateOne( {_id:bookid}, { $set:{
  	author:req.body.author,
  	bookstitle:req.body.bookstitle,
	discription:req.body.discription,
	price:req.body.price
  } } )
  .then(data=>{
    res.json({message:data});
  })
  .catch(err=>console.log(err));
});

//DELETE BOOK -status-work!
app.delete("/delete/:id", function(req, res){  
  const bookid = req.params.id;


  Books.deleteOne({_id:bookid}).then(() => {
    /*res.redirect("/");*/
  }).catch(err=>console.log(err));
  console.log("Delete  is done");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});