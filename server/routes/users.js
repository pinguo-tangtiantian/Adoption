
var express = require('express');
var transporter = require('../util/nodemailer');
var upload = require('../util/multer');
var sqldb = require('../util/mysql');

var Common = require('../common');

var router = express.Router();


/**
 * 注册
 */
router.post('/sign_up', upload.array(), function (req, res, next) {
    var user = req.body;
    var token = Common.randomWord(8, 15);
    var email = user.email; //注册邮箱
    var name = user.username;

    var activationUrl = 'http://127.0.0.1:3001/users/activate?email=' + email + '&token=' + token;
    var sql = 'INSERT INTO user_info ( username, email, telephone, password, cd_key) VALUES("' + name + '", "' + email + '", "' + user.telephone + '", "' + user.password + '", "' + token + '");';

    sqldb.query(sql, function (err, rows, fields) {
        if (err) {
            console.log(err.message);
            return;
        }

        res.setHeader("Set-Cookie", ["email=" + user.email, "word=" + user.password, "logStatus=-1"]);

        var mailOptions = {
            from: '798459906@qq.com',
            to: email,
            subject: '领养平台-请激活您的帐号',
            html: '<div>亲爱的: ' + name + '</div><br /><p>感谢您注册领养平台帐号，注册的最后一步，请通过下面链接完成帐号验证。即可开始体验blabla！</p><p>请<a href="' + activationUrl + '" target=_blank>点击这里</a>完成验证, 如果您无法点击此连接, 请手动拷贝下面链接地址到浏览器中:</p><p>' + activationUrl + '</p><p>如果您还有别的疑问或者不知道怎么办，请联系我:</p><p>新浪微博: @铲屎官Tritty</p><p>QQ号: 798459906</p><p>谢谢！</p>'
        };
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
                return;
            }
            res.send(info);
        });
    });
});

/**
 * 激活
 */
router.get('/activate', upload.array(), function (req, res, next) {
    var params = req.query;
    var token = params.token;
    var email = params.email;

    var sql1 = 'SELECT * FROM user_info WHERE email="' + email + '";';
    sqldb.query(sql1, function (err, rows, fields) {
        if (err) {
            console.log(err);
            res.send("激活失败！请前往邮箱确认激活链接~");
            return;
        }
        var activeCode = rows[0].cd_key;
        var activeStatus = rows[0].active;
        if (activeStatus == 1) {
            res.send("您的账号已成功激活，无需重复激活。您可前往登录页面登录您的账号~");
            return;
        } else {
            if (activeCode === token) {
                var sql2 = 'update user_info set active="1" where email="' + email + '";';  //激活成功
                sqldb.query(sql2, function (err, rows, fields) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    res.setHeader("Set-Cookie", ["logStatus=0"]);
                    res.send("您已成功激活账号，前往登录页面进行登录");
                })
            } else {
                res.send("激活码错误，请前往邮箱确认激活链接~");
            }
        }
    })
});

/**
 * 登录
 */
router.post('/sign_in', upload.array(), function (req, res, next) {
    var user = req.body;
    var email = user.email;
    var pwd = user.password;
    var sql = 'SELECT * FROM user_info where email="' + email + '";';

    sqldb.query(sql, function (err, rows, fields) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(rows[0])

        if(rows[0].active == 0){
            res.send("您还未激活账号，请前往注册邮箱地激活。");
        }else{
            if (pwd == rows[0].password) {
                res.setHeader("Set-Cookie", ["email=" + email, "word=" + pwd, "logStatus=1"]);
                res.send("登录成功");
            }else{
                res.send("密码错误，请重新输入密码");
            }
        }
    });
});


/**
 * 找回密码时发送邮件
 */
router.get('/change_pwd_apply', function(req, res, next){
    var email = req.query.email;
    var time = new Date().getTime();

    var sql1 = 'SELECT * FROM user_info where email="'+email+'";';
    sqldb.query(sql1, function(err, rows, fields){
        if(err){
            console.log(err);
            return;
        }
        var name = rows[0].username;
        var token = Common.randomWord(8, 15);
        var sql2 = 'UPDATE user_info SET last_mdf_pwd="'+time+'" where email="'+email+'";';
        sqldb.query(sql2, function(err, rows, fields){
            var url = 'http://127.0.0.1:3001/change_pwd?email='+email+'&md_key='+token;
            var mailOptions = {
                from: '798459906@qq.com',
                to: email,
                subject: '领养平台-找回密码',
                html: '<div>亲爱的: ' + name + '</div><br /><p>请通过下面链接修改密码，该链接在30分钟内有效。</p><p>请<a href="' + url + '" target=_blank>点击这里</a>完成验证, 如果您无法点击此连接, 请手动拷贝下面链接地址到浏览器中:</p><p>' + url + '</p><p>如果您还有别的疑问或者不知道怎么办，请联系我:</p><p>新浪微博: @铲屎官Tritty</p><p>QQ号: 798459906</p><p>谢谢！</p>'
            };
        
            transporter.sendMail(mailOptions, function (err, info) {
                if (err) {
                    console.log(err);
                    return;
                }
                res.send(info);
            });

        });
    })

});

router.get('/change_pwd', function(req, res, next){
    console.log(req.body)
    console.log(req.query)
    // var email = req.body.email;
    // var pwd = req.body.password;

    // var sql = 'UPDATE user_info set password="' + pwd + '"where email="' + email + '";';

    // sqldb.query(sql, function(err, rows, fields){
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }

    //     res.send("成功修改密码");
    // });

});

module.exports = router;