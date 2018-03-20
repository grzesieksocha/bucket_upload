var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/publish', function(req, res, next) {
  res.render('index', { title: 'Published!!!' });
});

/* POST text. */
router.post('/', function(req, res, next) {
  console.log(req.body.text)
  res.render('index', { title: 'Express' });
});

module.exports = router;
