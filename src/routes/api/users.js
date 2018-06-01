const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load model
const User = require('../../models/User');

// @route GET api/users/
// @description Index route
// @access Public
router.get('/', (req, res) => res.json({ msg: 'Users works'}));

// @route GET api/users/current
// @description Return current user
// @access Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
});

// @route GET api/users/register
// @description Register user
// @access Public
router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    // Check validation
    if(!isValid) {
        return res.status(400).json(errors);
    }

    User
        .findOne({ email: req.body.email })
        .then(user => {
            let newUser, avatar;
            avatar = gravatar.url(req.body.email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            });
            user
                ? res.status(400).json({ email: 'Email already exists' })
                : newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    avatar,
                    password: req.body.password
                });
            bcrypt.genSalt(10, (error, salt) => {
                bcrypt.hash(newUser.password, salt, (error, hash) => {
                    if(error) throw error;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(error => console.log(error));

                });
            });
        });
});

// @route GET api/users/login
// @description Login User / Returning JWT Token
// @access Public
router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    // Check validation
    if(!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User
        .findOne({ email })
        .then(user => {
            // Check for user
            if(!user) {
                // Old
                // return res.status(404).json({ email: 'User not found' });
                
                errors.email = 'User not found';
                return res.status(404).json({ errors });
            }

            // Check password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch) {
                        //res.json({ msg: 'Success' });
                        
                        // User matched - create JWT payload
                        const payload = {
                            id: user.id,
                            name: user.name,
                            avatar: user.avatar
                        };

                        // Sign token
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            { expiresIn: 43200 }, // 12 hours
                            (error, token) => {
                                res.json({
                                    success: true,
                                    token: 'Bearer ' + token
                                });
                            }
                        );
                    }
                    else {
                        // Old
                        // res.status(400).json({ password: 'Password incorrect' });

                        errors.password = 'Password incorrect';
                        return res.status(404).json({ errors });
                    }
                });
        });
});

module.exports = router;