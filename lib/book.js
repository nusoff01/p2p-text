var Book = require('../models/book.js');
var mongoose = require('mongoose');

exports.postNewBook = function(req, res){
	var b = new Book();
	b.name = req.body.name;
	b.edition = req.body.edition;
	b.course = req.body.course;
	console.log(b);
	b.save(function(err, b){
		if (err) return console.log(err);
	});
	res.redirect('/');
}