var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var parse = require('../parser');
var request = require('request').defaults({'jar':'true'});

router.get('/', function(req, res, next) {
	var cookie_jar = request.jar();
	request.post({
		jar: cookie_jar,
		url: 'https://www.spire.umass.edu/psp//heproda/EMPLOYEE/HRMS/c/COMMUNITY_ACCESS.CLASS_SEARCH.GBL?FolderPath=PORTAL_ROOT_OBJECT.CO_EMPLOYEE_SELF_SERVICE.HC_CLASS_SEARCH_GBL&IsFolder=false&IgnoreParamTempl=FolderPath%2cIsFolder HTTP/1.1',
		headers: {
			'Host': 'www.spire.umass.edu',
			'Connection': 'keep-alive',
			'Content-Length': '39',
			'Cache-Control': 'max-age=0',
			'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
			'Origin': 'https://www.spire.umass.edu',
			'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36',
			'Content-Type': 'application/x-www-form-urlencoded',
			'Referer': 'https://www.spire.umass.edu/psp/heproda/?cmd=login&languageCd=ENG',
			'Accept-Encoding': 'gzip, deflate',
			'Accept-Language': 'en-US,en;q=0.8'
		}
	}, function(err, res, body) { console.log(cookie_jar.getCookies('www.spire.umass.edu')); });
});
/*
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
*/
module.exports = router;
