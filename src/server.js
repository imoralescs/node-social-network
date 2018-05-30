'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// Database Config
const database = require('./config/keys').mongoURI;

// Connect to MLab MongoDB
mongoose
  .connect(database)
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.log(error));

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World - Israel Morales\n');
});

// Middleware
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define routes
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

// Set routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);