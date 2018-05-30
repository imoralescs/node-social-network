const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');

// Load User model
const User = require('../../models/User');

// @route GET api/users/
// @description Index route
// @access Public
router.get('/', (req, res) => res.json({ msg: 'Users works'}));

router.post('/register', (req, res) => {
    User
        .findOne({ email: req.body.email })
        .then(user => {
            const newUser;
            const avatar = gravatar.url(req.body.email, {
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
        })
});

module.exports = router;