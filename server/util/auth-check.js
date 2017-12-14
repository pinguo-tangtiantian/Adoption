var jwt = require('jsonwebtoken');
var sqldb = require('./mysql');


module.exports = function(req, res, next){
    if(!req.headers.authorization) {
        return res.status(401).end();
    }

    //获得认证头的最后一部分
    var token = req.headers.authorization.split(' ')[1];

    return jwt.verify(token, "Tang.Tritty&Zhang.Fregie@tritty.top", function(err,decoded){
        //未经过授权返回401
        if(err){
            return res.status(401).end();
        }
        var userId = decoded.sub;

        //检查用户是否存在
        sqldb.query("SELECT * from user_info where id="+userId, function(err, rows){
            if(err){
                return res.status(401).end();
            }

            return next();
        });
    });
}