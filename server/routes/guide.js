var express = require('express'),
router = express.Router();
var path = require('path');

router.get('/guide', function(req, res) {
    res.render('guide.html');
});

module.exports = router;