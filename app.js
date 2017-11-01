var express = require('express');
var path = require('path');

var reload = require('reload');
var http = require('http');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var isDev = process.env.NODE_ENV !== 'production';	//开发环境or正式环境
var app = express();
var port = 3000;


//设置模板引擎
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, './server/views'));

app.use(express.static(path.join(__dirname,'./server/views')));

//对所有视图设置本地变量
app.locals.env = process.env.NODE_ENV || 'dev';
app.locals.reload = true;



if(isDev){	//开发环境
	var webpack = require('webpack'),
		webpackDevMiddleware = require('webpack-dev-middleware'),
		webpackHotMiddleware = require('webpack-hot-middleware'),
		webpackDevConfig = require('./webpack.config.js');

	var compiler = webpack(webpackDevConfig);
	
	//连接编译器和服务器
	app.use(webpackDevMiddleware(compiler, {
		publicPath: webpackDevConfig.output.publicPath,
		noInfo: true,
		stats: {
			colors: true
		}
	}));

	app.use(webpackHotMiddleware(compiler));

	require('./server/routes')(app);

	//添加reload模块
	var server = http.createServer(app);
    reload(server, app);

    server.listen(port, function(){
        console.log('App (dev) is now running on port '+port);
    });


}else{
	//设置静态文件目录
	app.use(express.static(path.join(__dirname, 'public')));
	require('./server/routes')(app);
    app.listen(port, function () {
        console.log('App (production) is now running on port '+port);
    });
}

