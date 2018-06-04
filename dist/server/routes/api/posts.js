'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');

// Load input validation
var validatePostInput = require('../../validation/post');

// Load model
var Profile = require('../../models/Profile');
var User = require('../../models/User');
var Post = require('../../models/Post');

// @route GET api/posts
// @description Get post
// @access Public
router.get('/', function (req, res) {
    Post.find().sort({ date: -1 }).then(function (posts) {
        return res.json(posts);
    }).catch(function (error) {
        return res.status(404).json({ nopostsfound: 'No posts' });
    });
});

// @route GET api/posts/:id
// @description Get post by id
// @access Public
router.get('/:id', function (req, res) {
    Post.findById(req.params.id).then(function (post) {
        return res.json(post);
    }).catch(function (error) {
        return res.status(404).json({ nopostfound: 'No post found with that ID' });
    });
});

// @route POST api/posts
// @description Create post
// @access Private
router.post('/', passport.authenticate('jwt', { session: false }), function (req, res) {
    var _validatePostInput = validatePostInput(req.body),
        errors = _validatePostInput.errors,
        isValid = _validatePostInput.isValid;

    // Check validation


    if (!isValid) {
        // Return any errors with 400 status
        return res.status(400).json(errors);
    }

    var newPost = new Post({
        text: req.body.text,
        name: req.body.name,
        avatar: req.body.avatar,
        user: req.user.id
    });

    newPost.save().then(function (post) {
        return res.json(post);
    });
});

// @route POST api/posts/like/:id
// @description Like post - :id mean post id
// @access Private
router.post('/like/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
    Profile.findOne({ user: req.user.id }).then(function (profile) {
        Post.findById(req.params.id).then(function (post) {
            // Check if user already like post
            if (post.likes.filter(function (like) {
                return like.user.toString() === req.user.id;
            }).length > 0) {
                return res.status(400).json({ alreadyliked: 'User already liked this post' });
            }

            // Add user id to likes array
            post.likes.unshift({ user: req.user.id });

            post.save().then(function (post) {
                return res.json(post);
            });
        }).catch(function (error) {
            return res.status(404).json({ postnotfound: 'No post found' });
        });
    });
});

// @route POST api/posts/unlike/:id
// @description Unlike post - :id mean post id
// @access Private
router.post('/unlike/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
    Profile.findOne({ user: req.user.id }).then(function (profile) {
        Post.findById(req.params.id).then(function (post) {
            // Check if user already like post
            if (post.likes.filter(function (like) {
                return like.user.toString() === req.user.id;
            }).length === 0) {
                return res.status(400).json({ notliked: 'You have not yet liked this post' });
            }

            // Get remove index
            var removeIndex = post.likes.map(function (item) {
                return item.user.toString();
            }).indexOf(req.user.id);

            // Splice out of array
            post.likes.splice(removeIndex, 1);

            // Save
            post.save().then(function (post) {
                return res.json(post);
            });
        }).catch(function (error) {
            return res.status(404).json({ postnotfound: 'No post found' });
        });
    });
});

// @route POST api/posts/comment/:id
// @description Add comment to post - :id mean post id
// @access Private
router.post('/comment/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
    var _validatePostInput2 = validatePostInput(req.body),
        errors = _validatePostInput2.errors,
        isValid = _validatePostInput2.isValid;

    // Check validation


    if (!isValid) {
        // Return any errors with 400 status
        return res.status(400).json(errors);
    }

    Post.findById(req.params.id).then(function (post) {
        var newComment = {
            text: req.body.text,
            name: req.body.name,
            avatar: req.body.avatar,
            user: req.user.id

            // Add to comments array
        };post.comments.unshift(newComment);

        // Save 
        post.save().then(function (post) {
            return res.json(post);
        });
    }).catch(function (error) {
        return res.status(404).json({ postnotfound: 'No post found' });
    });
});

// @route DELETE api/posts/:id
// @description Delete post - :id mean post id
// @access Private
router.delete('/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
    Profile.findOne({ user: req.user.id }).then(function (profile) {
        Post.findById(req.params.id).then(function (post) {
            // Check for post owner
            if (post.user.toString() !== req.user.id) {
                return res.status(401).json({ notauthorized: 'User not authorized' });
            }

            // Delete
            post.remove().then(function () {
                return res.json({ success: true });
            });
        }).catch(function (error) {
            return res.status(404).json({ postnotfound: 'No post found' });
        });
    });
});

// @route DELETE api/posts/comment/:id/:comment_id
// @description Remove comment from post - :id mean post id :comment_id mean comment
// @access Private
router.delete('/comment/:id/:comment_id', passport.authenticate('jwt', { session: false }), function (req, res) {
    Post.findById(req.params.id).then(function (post) {
        // Check to see if comment exists
        if (post.comments.filter(function (comment) {
            return comment._id.toString() === req.params.comment_id;
        }).length === 0) {
            return res.status(404).json({ commentnotexists: 'Comment does not exists' });
        }

        // Get remove index
        var removeIndex = post.comments.map(function (item) {
            return item._id.toString();
        }).indexOf(req.params.comment_id);

        // Splice comment out of array
        post.comments.splice(removeIndex, 1);

        post.save().then(function (post) {
            return res.json(post);
        });
    }).catch(function (error) {
        return res.status(404).json({ postnotfound: 'No post found' });
    });
});

module.exports = router;