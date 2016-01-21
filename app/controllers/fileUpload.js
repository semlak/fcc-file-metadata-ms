

module.exports.controller = function(app) {
	var multer = require('multer');
	var upload = multer({ dest: __dirname + '../../../public/uploads/' }).single('fileToUpload');

	console.log("../../public/uploads/");

	app.get('/', function (req, res) {
		console.log("rendering homepage");
		var appURL = req.protocol + '://' + req.headers.host;
		process.env.APPURL= appURL
		var pageData = require('../views/indexPageData.js');
		res.render('index', pageData);
		res.end();
	});


	app.get('/uploadForm', function(req, res) {
		var appURL = req.protocol + '://' + req.headers.host;
		console.log('Loading file upload form');
		var pageData = { 
			'title'  : 'File upload page for Microservice API', 
			'appURL' : appURL
		};
		res.render('uploadForm', pageData);
		//iff an offset is entered (/querytext?offset=10), that will be available in the variable req.query.offset

	});

	app.post('/api/uploadFile', function(req, res) {
		console.log('attempting to upload file');
		// console.log(req.file);
		upload(req, res, function(err) {
			if (err || !req.file) {
				res.status(501);
				return res.end("Error uploading file.");
			}
			var returnObj = { "fileSize" : req.file.size || null};
			res.json(returnObj);
			res.end();
		});
	});

};