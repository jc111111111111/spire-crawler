var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

router.get('/', function(req, res, next) {
	res.render('index');
});
router.get('/:file', function(req, res, next) {
	var filePath = path.join(__dirname, '../public/data/' + req.params.file);

	fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
	    if (!err){
			res.write(data);
			res.end();
	    }else{
		console.log(err);
	    }
	});
});
module.exports = router;
