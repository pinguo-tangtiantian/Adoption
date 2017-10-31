var express = require('express'),
router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
    console.log(path.join(__dirname,'page2.html'))
res.sendFile(path.join(__dirname,'page2.html'));
});

module.exports = router;