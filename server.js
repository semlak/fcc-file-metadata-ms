	'use strict';

// server.js


var log = function(data) {
	console.log(data);
};


var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var url = require('url');
var path = require('path');
var port = process.env.PORT || 8080;
// var router = express.router;
var exports = module.exports = {};
//app.engine('.html', require('jade'));

app.use(express.static(__dirname + '/public'));


app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'jade');


//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var route = require('./app/controllers/fileUpload.js');
route.controller(app);

//information about server error handling at http://www.hacksparrow.com/express-js-custom-error-pages-404-and-500.html
// Handle 404
app.use(function(req, res, next) {
  res.status(400);
 res.render('404.jade', {title: '404: File Not Found'});
});

// Handle 500
app.use(function(error, req, res, next) {
  res.status(500);
 res.render('500.jade', {title:'500: Internal Server Error', error: error});
});



// start server

var server = app.listen(port);
console.log('Magic happens on port ' + port);

exports.closeServer = function(){
	//mainly used for testing
	console.log("closing server");
	mongoose.connection.close()
 	server.close();
};


// setTimeout(function() {
// 	console.log("closing server");
// 	server.close();
// }, 3000);