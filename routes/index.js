var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var parse = require('../parser');

router.get('/', function(req, res, next) {
	res.render('index');
});

router.get('/cmpsci', function(req, res, next) {

	var filePath = path.join(__dirname, 'cmpsci');

	fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
	    if (!err){
		var classes = parse(data);
		var write = '';
		for(var x = 0; x < classes.length; x++) {
			write += JSON.stringify(classes[x]) + '\n\n';
		}
		fs.writeFile(path.join(__dirname, 'CSJSON'), JSON.stringify(classes,null,4), function(err) {});
	    res.write(JSON.stringify(classes));
	    res.end();
	    }else{
		console.log(err);
	    }
	});
});

module.exports = router;
