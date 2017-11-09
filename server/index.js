var express = require('express');
var mysql = require('mysql');
var http = require('http');

var app = express();

var SERVERPORT = "3001";

var sqldb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456'
});

sqldb.connect();


app.all('*', function (req, res, next) {
    //设置响应头
    res.header('Access-Control-Allow-Origin', '*'); //允许跨域
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS'); //允许的请求方式
    res.header('Access-Control-Allow-Headers', 'Content-Type=application/json;charset=UTF-8');
    res.header('Access-Control-Allow-Credentials', true) //支持跨域传cookie
    res.header("Content-Type", "application/json;charset=utf-8");

    next();
});





var server = http.createServer(app);
server.listen(SERVERPORT);

server.on('error', function(error){
    if (error.syscall !== 'listen') {
        throw error;
      }
});

server.on('listening', function(){
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    console.log('Listening on '+addr.address + bind);
});

