// modules ================================================================
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const { registerFont } = require('canvas');
var methodOverride = require('method-override');
const app = express();

// configuration ===========================================================

// config files
require('./app/models/dbConfig');

//set our port
const port = process.env.PORT || 3000;

// connect to our mongoDB database
// (uncomment after you enter in your own credentials in config/db.js)
// mongoose.connect(db.url);

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// routes =================================================================

require('./app/routes/ficheRoutes')(app); // configure our routes to fiches
require('./app/routes/userRoutes')(app); // configure our routes to auth

// start app ==============================================================
// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);

// expose app
exports = module.exports = app;


app.use(express.json());