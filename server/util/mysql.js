var mysql = require('mysql');

// conncet to mysql server
var sqldb = mysql.createConnection({
    host: 'tritty.top',
    user: 'root',
    password: 'Fregie789632145.',
    database: 'adoption'
});

sqldb.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected successfully');
});

module.exports = sqldb;