'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _keys = require('./config/keys');

var _keys2 = _interopRequireDefault(_keys);

var _index = require('./routes/web/index');

var _index2 = _interopRequireDefault(_index);

var _users = require('./routes/api/users');

var _users2 = _interopRequireDefault(_users);

var _profile = require('./routes/api/profile');

var _profile2 = _interopRequireDefault(_profile);

var _posts = require('./routes/api/posts');

var _posts2 = _interopRequireDefault(_posts);

var _passport3 = require('./config/passport');

var _passport4 = _interopRequireDefault(_passport3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Connect to MLab MongoDB
_mongoose2.default.connect(_keys2.default.mongoURI).then(function () {
  return console.log('MongoDB connected');
}).catch(function (error) {
  return console.log(error);
});

//-- Constants


//-- Database Config
var PORT = 8080;
var HOST = '0.0.0.0';

//-- Routes
// Define routes


//-- App
var app = (0, _express2.default)();

//-- View
app.use(_express2.default.static('src/server/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//-- Middleware
// Body parser middleware
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

// Passport middleware
app.use(_passport2.default.initialize());

// Import and init passport config

(0, _passport4.default)(_passport2.default);

// Set routes
app.use('/api/users', _users2.default);
app.use('/api/profile', _profile2.default);
app.use('/api/posts', _posts2.default);
app.use('/', _index2.default); // Always on the end to catch all

//-- Logs
app.listen(PORT, HOST);
console.log('Running on http://' + HOST + ':' + PORT);