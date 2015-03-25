var request = require('request');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  var respMsg = 'Login Successful';
  req.body = JSON.stringify(req.body);
  request.post({url:'http://api.bluepromocode.com/v2/users/login', body: req.body}, function(err, httpResponse, body) {
	  	if(err) {
	  		respMsg = 'Login Failed';
	  	}
  });

  res.writeHead(200, {'content-type': 'text/plain' });
  res.write(respMsg);
  res.end();
});

module.exports = router;
