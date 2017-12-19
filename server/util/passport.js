var jwt = require('jsonwebtoken');
const LocalStrategy = require('passport-local').Strategy;
const sqldb = require('./mysql');

module.exports = {
    localLogin: new LocalStrategy({
        //local strategy默认使用username和password，我们用email重写username
        usernameField: 'email',
        passwordFeild: 'password',
        session: false,
        passReqToCallback: true //允许将整个请求发送给回调函数
    },
        function (req, email, password, done) {
            //通过邮箱地址找到该用户
            sqldb.query("SELECT * from user_info where email='" + email + "'", function (err, rows) {
                //查询错误
                if (err) {
                    return done(err);
                }

                //未找到用户
                if (!rows.length) {
                    var error = new Error();
                    error.name = "IncorrectLoginEmail";
                    error.message = "该用户不存在";
                    error.status = "1001";
                    return done(error);
                }

                //找到用户但是密码错误
                if (!(rows[0].password == password)) {
                    var error = new Error();
                    error.name = "IncorrectLoginPassword";
                    error.message = "密码错误";
                    error.number = "1002";
                    return done(error);
                }

                console.log(rows[0]);
                var payload = {
                    sub: rows[0].id
                };

                //创建token字符串
                var token = jwt.sign(payload, "Tang.Tritty&Zhang.Fregie@tritty.top");
                var data = {
                    name: rows[0].username
                }
                //万事俱备，只欠东风，返回正确用户
                return done(null, token, data);
            });
        }
    ),

    localSignup: new LocalStrategy({
        //local strategy默认使用username和password，我们将会用email重写username
        usernameField: 'email',
        passwordFeild: 'password',
        session: false,
        passReqToCallback: true //允许将整个请求发送给回调函数
    },

        function (req, email, password, done) {
            // console.log(req.body)
            //找到邮箱与表单邮箱一致的用户
            //检查请求注册的用户是否存在
            sqldb.query("SELECT * from user_info where email='" + email + "'", function (err, rows) {
                //查询错误
                if (err) {
                    return done(err);
                }

                //邮箱已被注册
                if (rows.length) {
                    var error = new Error('该邮箱已被注册');
                    error.name = "IncorrectSignupEmail";
                    return done(error);
                } else {//未找到用户，创建用户
                    var newUserMysql = {
                        email: email,
                        password: password,
                        username: req.body.username,
                        telephone: req.body.telephone,
                    };

                    var cdkey = randomize('*', 20);
                    var insertQuery = "INSERT INTO user_info ( username, password, email, telephone, cd_key ) values (?,?,?,?,?)";
                    sqldb.query(insertQuery, [newUserMysql.username, newUserMysql.password, newUserMysql.email, newUserMysql.telephone, cdkey], function (err, rows) {
                        if (err) {
                            return done(err);
                        }
                        newUserMysql.id = rows.insertId;
                        return done(null, newUserMysql);
                    })

                }
            })
        }

    )
}

