var express = require('express'),
router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
    // console.log(path.join(__dirname,'../page1/index.html'));
    // res.render("page1/index.html")
res.sendFile(path.resolve(__dirname,'../views/page1/index.html'));
});

module.exports = router;