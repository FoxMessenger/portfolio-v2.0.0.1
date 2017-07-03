// ==============================
// Dependencies
// ==============================
	// web application framework 
	var express 	= require('express');
	// NodeJS body parsing middleware
	var bodyParser 	= require('body-parser')
	var app 		= express();

// ==============================
// Sets up the Express App and Data Parsing
// ==============================

	app.use(express.static('public'));
	var PORT 		= process.env.PORT || 3000;

	app.use(express.static(process.cwd() + '/public'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.text());
	app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// ==============================
// Run Server
// ==============================
	app.listen(PORT, function() {
		console.log('App running on port ' + PORT);
	});
