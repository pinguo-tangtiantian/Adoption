var express = require('express');
var multer = require('multer');
var path = require('path');

var router = express.Router();
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../pictures'));
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

var upload = multer({ storage: storage });

// var upload = multer({ dest: path.resolve(__dirname, '../pictures/') });

router.post('/test', upload.fields([
    { name: 'uoload_animal', maxCount: 1 },
    { name: 'photos', maxCount: 6 }
]), function (req, res, next) {
    console.log(req.body);
    console.log(req.files);
});

module.exports = router;


