var express = require('express');
var router = express.Router();

router.use('/Users', require('./Users/users.js'))

module.exports = router;

// this is my second edit