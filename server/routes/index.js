var express = require('express');
var path = require('path');

var sqldb = require('../util/mysql');
var upload = require('../util/multer');
var Common = require('../common');

var router = express.Router();

router.get('/', function(req,res,next){
    console.log("66666")
    res.render('index.html');
});

module.exports = router;