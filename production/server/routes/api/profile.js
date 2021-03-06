'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');

// Load input validation
var validateProfileInput = require('../../validation/profile');
var validateExperienceInput = require('../../validation/experience');
var validateEducationInput = require('../../validation/education');

// Load model
var Profile = require('../../models/Profile');
var User = require('../../models/User');

// @route GET api/profile
// @description Get current users profile
// @access Private
router.get('/', passport.authenticate('jwt', { session: false }), function (req, res) {
    var errors = {};

    // req.user.id - come from used token on request.
    Profile.findOne({ user: req.user.id })
    // This is for grab value from User Model relate to this user profile and add in response
    .populate('user', ['name', 'avatar']).then(function (profile) {
        if (!profile) {
            errors.noprofile = 'There is no profile for this user';
            return res.status(404).json(errors);
        }
        res.json(profile);
    }).catch(function (error) {
        return res.status(404).json(error);
    });
});

// @route GET api/profile/all
// @description Get all profile
// @access Public
router.get('/all', function (req, res) {
    var errors = {};

    Profile.find().populate('user', ['name', 'avatar']).then(function (profiles) {
        if (!profiles) {
            errors.noprofile = 'There are no profiles';
            return res.status(404).json(errors);
        }
        res.json(profiles);
    }).catch(function (error) {
        return res.status(404).json({ profile: 'There are no profiles' });
    });
});

// @route GET api/profile/handle/:handle
// @description Get profile by handle
// @access Public
router.get('/handle/:handle', function (req, res) {
    var errors = {};

    Profile.findOne({ handle: req.params.handle }).populate('user', ['name', 'avatar']).then(function (profile) {
        if (!profile) {
            errors.noprofile = 'There is no profile for this user';
            res.status(404).json(errors);
        }
        res.json(profile);
    }).catch(function (error) {
        return res.status(404).json({ profile: 'There is no profile for this user' });
    });
});

// @route GET api/profile/user/:user_id
// @description Get profile by user ID
// @access Public
router.get('/user/:user_id', function (req, res) {
    var errors = {};

    Profile.findOne({ user: req.params.user_id }).populate('user', ['name', 'avatar']).then(function (profile) {
        if (!profile) {
            errors.noprofile = 'There is no profile for this user';
            res.status(404).json(errors);
        }
        res.json(profile);
    }).catch(function (error) {
        return res.status(404).json({ profile: 'There is no profile for this user' });
    });
});

// @route POST api/profile
// @description Create user profile
// @access Private
router.post('/', passport.authenticate('jwt', { session: false }), function (req, res) {
    var _validateProfileInput = validateProfileInput(req.body),
        errors = _validateProfileInput.errors,
        isValid = _validateProfileInput.isValid;

    // Check validation


    if (!isValid) {
        // Return any errors with 400 status
        return res.status(400).json(errors);
    }

    // Get fields
    var profileFields = {};
    profileFields.user = req.user.id;

    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.company) profileFields.company = req.body.company;
    if (req.body.website) profileFields.website = req.body.website;
    if (req.body.location) profileFields.location = req.body.location;
    if (req.body.bio) profileFields.bio = req.body.bio;
    if (req.body.status) profileFields.status = req.body.status;
    if (req.body.githubusername) profileFields.githubusername = req.body.githubusername;

    // Skills - split into array
    if (typeof req.body.skills !== 'undefined') {
        profileFields.skills = req.body.skills.split(',');
    }

    // Social
    profileFields.social = {};
    if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
    if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

    Profile.findOne({ user: req.user.id }).then(function (profile) {
        if (profile) {
            // Update
            Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true }).then(function (profile) {
                return res.json(profile);
            });
        } else {
            // Create

            // Check if handle exists
            Profile.findOne({ handle: profileFields.handle }).then(function (profile) {
                if (profile) {
                    errors.handle = 'That handle already exists';
                    res.status(400).json(errors);
                }

                // Save profile
                new Profile(profileFields).save().then(function (profile) {
                    return res.json(profile);
                });
            });
        }
    });
});

// @route POST api/profile/experience
// @description Add experience to profile
// @access Private
router.post('/experience', passport.authenticate('jwt', { session: false }), function (req, res) {
    var _validateExperienceIn = validateExperienceInput(req.body),
        errors = _validateExperienceIn.errors,
        isValid = _validateExperienceIn.isValid;

    // Check validation


    if (!isValid) {
        // Return any errors with 400 status
        return res.status(400).json(errors);
    }

    Profile.findOne({ user: req.user.id }).then(function (profile) {
        var newExp = {
            title: req.body.title,
            company: req.body.company,
            location: req.body.location,
            from: req.body.from,
            to: req.body.to,
            current: req.body.current,
            description: req.body.description

            // Add to experience array
        };profile.experience.unshift(newExp);

        profile.save().then(function (profile) {
            return res.json(profile);
        });
    });
});

// @route POST api/profile/education
// @description Add education to profile
// @access Private
router.post('/education', passport.authenticate('jwt', { session: false }), function (req, res) {
    var _validateEducationInp = validateEducationInput(req.body),
        errors = _validateEducationInp.errors,
        isValid = _validateEducationInp.isValid;

    // Check validation


    if (!isValid) {
        // Return any errors with 400 status
        return res.status(400).json(errors);
    }

    Profile.findOne({ user: req.user.id }).then(function (profile) {
        var newEdu = {
            school: req.body.school,
            degree: req.body.degree,
            fieldofstudy: req.body.fieldofstudy,
            from: req.body.from,
            to: req.body.to,
            current: req.body.current,
            description: req.body.description

            // Add to experience array
        };profile.education.unshift(newEdu);

        profile.save().then(function (profile) {
            return res.json(profile);
        });
    });
});

// @route DELETE api/profile
// @description Delete user and profile, used the same token to retrieve user id
// @access Private
router.delete('/', passport.authenticate('jwt', { session: false }), function (req, res) {
    Profile.findOneAndRemove({ user: req.user.id }).then(function () {
        User.findOneAndRemove({ _id: req.user.id }).then(function () {
            res.json({ success: true });
        }).catch(function (error) {
            return res.status(400).json(error);
        });
    }).catch(function (error) {
        return res.status(400).json(error);
    });
});

// @route DELETE api/profile/experience/:exp_id
// @description Delete experience from profile
// @access Private
router.delete('/experience/:exp_id', passport.authenticate('jwt', { session: false }), function (req, res) {
    Profile.findOne({ user: req.user.id }).then(function (profile) {
        // Get remove index
        var removeIndex = profile.experience.map(function (item) {
            return item.id;
        }).indexOf(req.params.exp_id);

        // Splice out of array
        profile.experience.splice(removeIndex, 1);

        // Save
        profile.save().then(function (profile) {
            return res.json(profile);
        });
    }).catch(function (error) {
        return res.status(404).json(error);
    });
});

// @route DELETE api/profile/education/:edu_id
// @description Delete education from profile
// @access Private
router.delete('/education/:edu_id', passport.authenticate('jwt', { session: false }), function (req, res) {
    Profile.findOne({ user: req.user.id }).then(function (profile) {
        // Get remove index
        var removeIndex = profile.education.map(function (item) {
            return item.id;
        }).indexOf(req.params.edu_id);

        // Splice out of array
        profile.education.splice(removeIndex, 1);

        // Save
        profile.save().then(function (profile) {
            return res.json(profile);
        });
    }).catch(function (error) {
        return res.status(404).json(error);
    });
});

module.exports = router;