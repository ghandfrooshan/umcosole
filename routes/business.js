var express = require('express');
var router = express.Router();

var users = require('./users/users.js')

router.use('/Users', users)

module.exports = router;

// this is my second edit