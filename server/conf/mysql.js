//连接数据库
var mysql = require('mysql');
var db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "123456",
	port: "3306"
});

db.connect();

console.log("Database connected success!");

module.exports = db;