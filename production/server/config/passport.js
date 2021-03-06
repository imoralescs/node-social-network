'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var mongoose = require('mongoose');
var User = mongoose.model('users');
var keys = require('../config/keys');

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

exports.default = function (passport) {
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        User.findById(jwt_payload.id).then(function (user) {
            if (user) {
                return done(null, user);
            }
            return done(null, false);
        }).catch(function (error) {
            return console.log(error);
        });
    }));
};