const mongoose = require("mongoose");

const BooksSchema = mongoose.Schema({
	author:{
		type: String,
		required:true
	},
	bookstitle:{
		type: String,
		required:true
	},
	discription: {
		type: String,
		required: true,
		min:10,
		max:1024
	},
	price: {
		type: Number,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});
module.exports = mongoose.model("Book", BooksSchema);