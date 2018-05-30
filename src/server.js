'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

//-- Constants
const PORT = 8080;
const HOST = '0.0.0.0';

//-- Database Config
const database = require('./config/keys').mongoURI;

// Connect to MLab MongoDB
mongoose
  .connect(database)
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.log(error));

//-- Routes
// Define routes
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

//-- App
const app = express();

//-- Middleware
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Set routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

//-- Logs
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);