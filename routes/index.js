var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var parse = require('../parser');
var request = require('request').defaults({'jar':'true'});

router.get('/', function(req, res, next) {
	req.session.cart = {classes:'blah'};
	res.render('index');
});
router.get('/a', function(req, res, next) {
	console.log(req.session);
	res.render('index');
});
module.exports = router;
