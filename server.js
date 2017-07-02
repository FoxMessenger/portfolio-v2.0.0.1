// ==============================
// Dependencies
// ==============================

	var express 	= require('express');
	var bodyParser 	= require('body-parser')
	var handlebars 	= require('handlebars');
	var app 		= express();

	// var mongojs 	= require('mongojs');
	// var mongoose 	= require('mongoose');

	var exphbs 		= require('express-handlebars');
	var hbs 		= exphbs.create({
						defaultLayout: 'main',
						partialsDir: ['views/partials/']
					  });

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
// Mongoose
// ==============================
	var connectionString = process.env.MONGODB_URI || "mongodb://localhost/news-worthy"
	// Mongoose Database configuration
	mongoose.Promise= Promise;
	mongoose.connect(connectionString);
	var db 			= mongoose.connection;

	// Mongoose err message
	db.on('err', function(err) {
	  console.log('mongoose Err: ', err);
	});
	// Mongoose success message
	db.once('open', function() {
	  console.log('Mongoose connection successful.');
	});

// ==============================
// Handlebars
// ==============================

	app.engine('handlebars', hbs.engine);
	app.set('view engine', 'handlebars');

// ==============================
// Controllers
// ==============================
	// var scraper 	= require('./controllers/scraper_controller.js');
	// var router		= require('./controllers/router_controller.js');

// ==============================
// Routes
// ==============================
	app.use('/', scraper);
	app.use('/', router);

// ==============================
// Run Server
// ==============================
	app.listen(PORT, function() {
		console.log('App running on port ' + PORT);
	});
