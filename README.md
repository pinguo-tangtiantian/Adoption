# Adoption





## 使用方法
1. 克隆该仓库；
2. 安装相关依赖:
```javascript
    $ npm install
    $ npm install supervisor -g
```
3. 启动项目：
```javascript
    $ npm start
```

## webpack+express实现全栈自动刷新的配置

### 目录结构


### 相关依赖模块
* cross-env
* webpack-dev-middleware
* webpack-hot-middleware
* reload
* supervisor(全局)  
  


### 配置过程  
  
  
#### 1. 配置(webpack.config.js)[./webpack.config.js]
```javascript
var webpack = require('webpack');
var path = require('path');

var publicPath = '/';

//?后的内容相当于为webpack-hot-middleware设置参数，reload=true的意思是，如果碰到不能hot reload的情况，就整页刷新。
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

var devConfig = {
    entry: {
        //多入口文件，每个entry后面都要加hotMiddlewareScript
        page1: ['./client/page1', hotMiddlewareScript],
        page1: ['./client/page2', hotMiddlewareScript],
    },
    output: {
        filename: './[name]/bundle.js',
        path: path.resolve('./public'),
        publicPath: publicPath
    },
    devtool: 'eval',
    module: {
        loaders: [
            {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = devConfig;
```
  
#### 2. 修改express启动文件(app.js)[]
```javascript
var express = require('express');
var path = require('path');

var reload = require('reload');
var http = require('http');
var ejs = require('ejs');

var isDev = process.env.NODE_ENV !== 'production';	//开发环境or正式环境
var app = express();    //创建app
var port = 3000;


//设置模板引擎
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, './server/views'));   //设置模板目录


//对所有视图设置本地变量
app.locals.env = process.env.NODE_ENV || 'dev';
app.locals.reload = true;



if(isDev){	//开发环境下
	var webpack = require('webpack'),
		webpackDevMiddleware = require('webpack-dev-middleware'),
		webpackHotMiddleware = require('webpack-hot-middleware'),
		webpackDevConfig = require('./webpack.config.js');

	var compiler = webpack(webpackDevConfig);
	
	//连接编译器和服务器
	app.use(webpackDevMiddleware(compiler, {
        //publicPath要与webpack.config.js中设置的保持一致
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
```
  
#### 3. 设置server部分自动刷新
  
1. 将reload和supervisor引入到Express项目，其中supervisor必须全局安装;
```javascript
    $ npm install reload --save-dev
    $ npm install supervisor -g
```
  
2. 在package.json里设置新的scripts
```javascript
"scripts": {
    "start": "cross-env NODE_ENV=dev supervisor -i client app"
}
```
参数解释：  
`cross-env`: windows不支持NODE_ENV=dev的设置方式，所以引入`cross-env`来处理windows和其他Unix系统在设置环境变量的写法上不一致的问题，以这个迷你包能让我们在script中以unix方式设置环境变量，在windows上也能兼容运行；  
`NODE_ENV=dev`: 设置node的环境变量，默认是dev开发环境，正式环境是production，可通过`process.env.NODE_ENV`获取值;  
`supervisor`: 使用supervisor代替nodejs启动应用;  
`-i client`: 等于`-ignore`,表示忽略client目录，我们不希望修改前端代码时服务器也要重启;  
`app`: 启动应用app.js。
  
3. 把会重启的服务器与浏览器关联
在express启动文件中添加如下代码：
```javascript
var reload = require('reload');
var http = require('http');

//启动服务器
var server = http.createServer(app);
//连接服务器与应用
reload(server, app);

server.listen(3000, function(){
    console.log('App (dev) is now running on port 3000!');
});
//Express启动文件的最后一般是app.listen()。参照reload的说明，需要这样用http再增加一层服务。
```
  
再到Express的【每一个】视图文件views的底部增加一个<script>：
```javascript
<% if (env !== "production") { %>
    <script src="/reload/reload.js"></script>
<% } %>
```
  
这里的reload.js和前面webpack的开发环境bundle.js并不冲突，它们一个负责前端源文件变更后进行编译和刷新，另一个负责在服务器发生重启时触发延时刷新。