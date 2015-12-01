var express = require('express');
var router = express.Router();

var dal = require('../../modules/DAL.js')

router.get('/', function (req, res) {
	dal('uspGetUsers', null, function(err, result) {
		res.send(result.Users);
	})
	
})

module.exports = router;
