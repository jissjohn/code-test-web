var request = require('request');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  request('http://api.bluepromocode.com/v2/promotions', function(error, response, body) {
  	if(!error && response && response.statusCode === 200) {
  		//Process JSON HERE
  		res.render('index', { title: 'Promotions' });
  	} else {
  		console.log(error);
  		res.render('error');
  	}
  });
});

module.exports = router;
