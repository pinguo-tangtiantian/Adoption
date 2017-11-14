var express = require('express');
var multer = require('multer');
var path = require('path');
var mysql = require('mysql');

var router = express.Router();

// conncet to mysql server
var sqldb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'adoption'
});

sqldb.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.error('connected successfully');
});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        var savePath = path.resolve(__dirname, '../pictures/'+req.body.type+"/");
        cb(null, savePath);
    },
    filename: function (req, file, cb) {
        var type = req.body.type;
        var name = req.body.name;
        var fileFormat = (file.originalname).split(".");
        var format = fileFormat[fileFormat.length - 1];
        console.log(fileFormat)
        cb(null, type+'-'+ name + '-' + Date.now() + '.' + format);
    }
})

var upload = multer({ storage: storage });

router.post('/test', upload.fields([
    { name: 'uoload_animal', maxCount: 1 },
    { name: 'photos', maxCount: 6 }
]), function (req, res, next) {
    console.log(req.body);
    console.log(req.files);
});

router.post('/upload_animal', upload.array("photos", 6), function (req, res, next) {
    var imgsArr = req.files;
    var data = req.body;
    var tempImgs = [];
    for(var i=0; i<imgsArr.length; i++){
      tempImgs.push(imgsArr[i].path);
    }
    var imgUrls = tempImgs.join("|");
    var sql = 'INSERT INTO cat_list ( breed, name, gender, color, age, expelling, vaccine, neutering, nature, origin, deposit, remark, img_urls) VALUES("'+data.breed+'", "'+data.name+'", "'+data.gender+'", "'+data.color+'", "'+data.age+'", "'+data.expelling+'", "'+data.vaccine+'", "'+data.neutering+'", "'+data.nature+'", "'+data.origin+'", "'+data.deposit+'", "'+data.remark+'", "'+imgUrls+'");';
    sqldb.query(sql, function(err, rows, fields) {
      if (err) throw err;
      res.send({ "data" : rows});
    });
});



module.exports = router;