var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var db = require('../js/db.js');
var parse = require('../js/parser.js');

router.get('/', function(req, res, next) {
	res.render('index');
});
router.get('/courses', function(req, res, next) {
	db.find(function(err, data) {
		if(err)
			console.log(err);
		else
			res.send(data);
	});
});
router.get('/:file', function(req, res, next) {
	var filePath = path.join(__dirname, '../public/data/' + req.params.file);

	fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
	    if (!err){
			res.render('search', {data: data});
			res.end();
	    }else{
		console.log(err);
	    }
	});
});
router.get('/parse/:id', function(req, res, next) {
        var filePath = path.join(__dirname, '../data/raw/' + req.params.id);

        fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
            if (!err){
                var classes = parse(data);
                var write = '';
                for(var x = 0; x < classes.length; x++) {
			db.update(classes[x]);
                }
            res.write("Parse successful");
            res.end();
            }else{
                console.log(err);
            }
        });
});
module.exports = router;
