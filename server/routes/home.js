var express = require('express'),
router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
    res.render('home.html');
});

module.exports = router;