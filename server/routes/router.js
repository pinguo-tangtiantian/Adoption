var express = require('express'),
    router = express.Router();
var path = require('path');
var SQL = require('../conf/mysql');

// router.get('/', function(req, res) {
//     res.render('home.html');
// });

// router.get('/guide', function(req, res) {
//     res.render('guide.html');
// });

router.get('/upload', function(req, res) {
    res.render('upload.html');
});

router.post('/upload_form', function(req, res) {
    res.send("666666");
});


module.exports = router;