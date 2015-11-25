var express = require('express');
var router = express.Router();

router.get('/home', function(req,res){
	res.render('global/home')
})
router.get('/definations', function(req,res){
	res.render('global/definations')
})
router.get('/definations/users', function(req,res){
	res.render('singlePages/user')
})

module.exports = router;