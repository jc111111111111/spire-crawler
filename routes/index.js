var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var Course = require('../js/db');
var parse = require('../js/parser');

router.get('/', function(req, res, next) {
	res.render('index');
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
			new Course(classes[x]).save(function(err, course) { });
                }
            res.write("Parse successful");
            res.end();
            }else{
                console.log(err);
            }
        });
});
module.exports = router;
