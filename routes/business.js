var express = require('express');
var router = express.Router();

<<<<<<< HEAD
router.use('/Users', require('./Users/users.js'))
=======
var users = require('./users/users.js')

router.use('/Users', users)
>>>>>>> ad229b261ef4f1dd625c2826ab6ca558d25c1c3c

module.exports = router;

// this is my second edit