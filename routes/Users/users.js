var express = require('express');
var router = express.Router();
var sql = require('mssql');

var config = {
    user: 'Nodejs',
    password: '123',
    server: 'frosh', // You can use 'localhost\\instance' to connect to named instance 
    database: 'UM',
}

router.get('/', function (req, res) {
	var connection = new sql.Connection(config, function (err) {
		// ... error checks 
		var request = new sql.Request(connection); // or: var request = connection.request(); 
		request.query('SELECT * FROM Users', function (err, recordset) {
			// ... error checks 
			res.send(recordset)
		});
	});
})

module.exports = router;