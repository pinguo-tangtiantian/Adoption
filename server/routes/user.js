
var express = require('express');
const crypto = require('crypto');

var transporter = require('../util/nodemailer');
var upload = require('../util/multer');
var sqldb = require('../util/mysql');
var passport = require('passport');


module.exports = function (app, passport) {
    /**
     * 注册
     */
    app.post('/signup', function (req, res, next) {

    });

    app.post('/login', passport.authenticate(
        'local-login',
        {
            successRedirect: '/home',
            failureRedirect: '/login',
            session: false
        }),
        function (req, res, next) {
            res.send("666")
        });



    /**
     * 激活
     */
    app.get('/activate', upload.array(), function (req, res, next) {
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
                    var time = new Date().getTime();
                    var sql2 = 'UPDATE user_info SET active="1", last_login_time="' + time + '"WHERE email="' + email + '";';  //激活成功
                    sqldb.query(sql2, function (err, rows, fields) {
                        if (err) {
                            console.log(err);
                            return;
                        }
                        // res.setHeader("Set-Cookie", ["logStatus=0"]);
                        res.send("您已成功激活账号，前往登录页面进行登录");
                    })
                } else {
                    res.send("激活码错误，请前往邮箱确认激活链接~");
                }
            }
        })
    });




    /**
     * 找回密码时发送邮件
     */
    app.get('/change_pwd_apply', function (req, res, next) {
        var email = req.query.email;
        var time = new Date().getTime();
        console.log(req.headers)

        var sql1 = 'SELECT * FROM user_info where email="' + email + '";';
        sqldb.query(sql1, function (err, rows, fields) {
            if (err) {
                console.log(err);
                return;
            }
            var name = rows[0].username;
            var token = Common.randomWord(8, 15);
            var sql2 = 'UPDATE user_info SET last_mdf_pwd="' + time + '" where email="' + email + '";';
            sqldb.query(sql2, function (err, rows, fields) {
                var url = 'http://127.0.0.1:3001/change_pwd?email=' + email + '&md_key=' + token;
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



    app.get('/change_pwd', function (req, res, next) {
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
}