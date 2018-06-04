'use strict';

var express = require('express');
var router = express.Router();
var gravatar = require('gravatar');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var keys = require('../../config/keys');
var passport = require('passport');

// Load input validation
var validateRegisterInput = require('../../validation/register');
var validateLoginInput = require('../../validation/login');

// Load model
var User = require('../../models/User');

// @route GET api/users/
// @description Index route
// @access Public
router.get('/', function (req, res) {
    return res.json({ msg: 'Users worksss' });
});

// @route GET api/users/current
// @description Return current user
// @access Private
router.get('/current', passport.authenticate('jwt', { session: false }), function (req, res) {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
});

// @route GET api/users/register
// @description Register user
// @access Public
router.post('/register', function (req, res) {
    var _validateRegisterInpu = validateRegisterInput(req.body),
        errors = _validateRegisterInpu.errors,
        isValid = _validateRegisterInpu.isValid;

    // Check validation


    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email }).then(function (user) {
        var newUser = void 0,
            avatar = void 0;
        avatar = gravatar.url(req.body.email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        });
        user ? res.status(400).json({ email: 'Email already exists' }) : newUser = new User({
            name: req.body.name,
            email: req.body.email,
            avatar: avatar,
            password: req.body.password
        });
        bcrypt.genSalt(10, function (error, salt) {
            bcrypt.hash(newUser.password, salt, function (error, hash) {
                if (error) throw error;
                newUser.password = hash;
                newUser.save().then(function (user) {
                    return res.json(user);
                }).catch(function (error) {
                    return console.log(error);
                });
            });
        });
    });
});

// @route GET api/users/login
// @description Login User / Returning JWT Token
// @access Public
router.post('/login', function (req, res) {
    var _validateLoginInput = validateLoginInput(req.body),
        errors = _validateLoginInput.errors,
        isValid = _validateLoginInput.isValid;

    // Check validation


    if (!isValid) {
        return res.status(400).json(errors);
    }

    var email = req.body.email;
    var password = req.body.password;

    // Find user by email
    User.findOne({ email: email }).then(function (user) {
        // Check for user
        if (!user) {
            // Old
            // return res.status(404).json({ email: 'User not found' });

            errors.email = 'User not found';
            return res.status(404).json({ errors: errors });
        }

        // Check password
        bcrypt.compare(password, user.password).then(function (isMatch) {
            if (isMatch) {
                //res.json({ msg: 'Success' });

                // User matched - create JWT payload
                var payload = {
                    id: user.id,
                    name: user.name,
                    avatar: user.avatar
                };

                // Sign token
                jwt.sign(payload, keys.secretOrKey, { expiresIn: 43200 }, // 12 hours
                function (error, token) {
                    res.json({
                        success: true,
                        token: 'Bearer ' + token
                    });
                });
            } else {
                // Old
                // res.status(400).json({ password: 'Password incorrect' });

                errors.password = 'Password incorrect';
                return res.status(404).json({ errors: errors });
            }
        });
    });
});

module.exports = router;