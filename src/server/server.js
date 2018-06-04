import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import passport from 'passport';
import path from 'path';

//-- Database Config
import database from './config/keys';

// Connect to MLab MongoDB
mongoose
  .connect(database.mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.log(error));

//-- Constants
const PORT = 8080;
const HOST = '0.0.0.0';

//-- Routes
// Define routes
import index from './routes/web/index';
import users from './routes/api/users';
import profile from './routes/api/profile';
import posts from './routes/api/posts';

//-- App
const app = express();

//-- View
app.use(express.static('src/server/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//-- Middleware
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());

// Import and init passport config
import initPassport from './config/passport';
initPassport(passport);

// Set routes
app.use('/', index);
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

//-- Logs
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);