'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');

//-- Constants
var PORT = 8080;
var HOST = '0.0.0.0';

//-- Database Config
var database = require('./config/keys').mongoURI;

// Connect to MLab MongoDB
mongoose.connect(database).then(function () {
  return console.log('MongoDB connected');
}).catch(function (error) {
  return console.log(error);
});

//-- Routes
// Define routes
var index = require('./routes/web/index');
var users = require('./routes/api/users');
var profile = require('./routes/api/profile');
var posts = require('./routes/api/posts');

//-- App
var app = express();

//-- View
app.use(express.static('public'));
app.set('view engine', 'ejs');

//-- Middleware
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Set routes
app.use('/', index);
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

//-- Logs
app.listen(PORT, HOST);
console.log('Running on http://' + HOST + ':' + PORT);