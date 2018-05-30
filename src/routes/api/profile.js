const express = require('express');
const router = express.Router();

// @route GET api/profile/
// @description Index route
// @access Public
router.get('/', (req, res) => res.json({ msg: 'Profile works'}));

module.exports = router;