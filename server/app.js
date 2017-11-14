var express = require('express');

var http = require('http');
var cors = require('cors');
var path = require('path');
var router = require('./router');

var SERVERPORT = "3001";


var app = express();
//设置跨域请求
app.use(cors());

//Get port from environment and store in Express.
var port = normalizePort(process.env.PORT || SERVERPORT);
app.set('port', port);

app.use('/api', router);


/**
 * Normalize a port into a number, string, or false.
 * @param {any} val port
 */
function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    // res.status(err.status || 500);
    console.log(res.locals.message)
});




//Create HTTP server.
var server = http.createServer(app);

//Listen on provided port, on all network interfaces.
server.listen(SERVERPORT);

//Event listener for HTTP server "error" event.
server.on('error', function (error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
});

//Event listener for HTTP server "listening" event.
server.on('listening', function () {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log('Listening on ' + addr.address + bind);
});

