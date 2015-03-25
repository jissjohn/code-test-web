var request = require('request');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  request('http://api.bluepromocode.com/v2/promotions', function(error, response, body) {
  	if(!error && response && response.statusCode === 200) {
  		body = JSON.parse(body);
  		res.render('index', {coupons: body.promotions});
  	} else {
  		console.log(error);
  		res.render('error');
  	}
  });
});

module.exports = router;
