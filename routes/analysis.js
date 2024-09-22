var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('analysis', { title: 'Route Analysis' });
});

module.exports = router;
