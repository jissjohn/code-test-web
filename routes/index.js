var request = require('request');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  request('http://api.bluepromocode.com/v2/promotions', function(error, response, body) {
  	var couponsCount = 0, iter;
  	if(!error && response && response.statusCode === 200) {
  		body = JSON.parse(body);
  		couponsCount = body.promotions && body.promotions.length;
  		for(iter = 0; iter < couponsCount; iter++) {
  			if(body.promotions[iter].promoType === 'link')
  				body.promotions[iter].baseLink = 'https://bluepromocode.com/sale/'
  			else
  				body.promotions[iter].baseLink = 'https://bluepromocode.com/coupon/'
  		}
  		res.render('index', {coupons: body.promotions});
  	} else {
  		console.log(error);
  		res.render('error');
  	}
  });
});

module.exports = router;
