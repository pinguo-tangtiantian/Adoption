# Adoption 领养

## 打开方式
1. 安装   
`npm install`
2. 启动服务端
`npm run server`
3. 启动客户端
`npm eun dev_me`


## 踩坑总结
### 1. `....../node_modules/react-router/es/index"' has no exported member 'Link'.`
react-router是3系列本班，而@types包目前默认安装最新版即4系列版本。4系列版本的react-router将库中很多东西移到了react-router-dom包里，所以有些属性不在4系列版本的@types/react-router中。  
解决方案：  
step1. 安装react-router-dom: `npm install --save @types/react-router-dom react-router-dom`；  
step2. 引入Link组件
```javascript
import { Router, Route, Link } from 'react-router-dom';
```

### 2. `browserHistory is undefined`
react-router4以后的包不再提供browserHistory
解决方案：  
step1. 安装history:  `npm install --save @types/history history`;  
step2. 引入
```javascript
import createBrowserHistory from 'history/createBrowserHistory'
const browserHistory = createBrowserHistory();
```

### 3. 点击Link组件可以实现页面跳转，但是在地址栏里直接输入地址不会跳转
webpack.config.js的devServer中配置：`historyApiFallback:true`；

### 4. 设置HTTP响应头解决跨域
解决方案1： 在服务端启动文件中加入
```javascript
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
```
解决方案2：直接引入cors
`npm install cors`
```javascript
var cors = require('cors');
app.use(cors());
```
### 5. react中`<input type="file">`的onChange事件再页面重新渲染后失效
百度上面并没有查到与此相关的问题与答案，但是看到一个react组件库叫`react-input-file`，看起来像是能解决这个问题的东西，所以就试了一下。  
但是在尝试的过程中发现这个问题并没有那么简单，首先这个库是依赖于react@15的，其次在这个库的定义文件中，导出是用的es5的语法，所以在引入时需要用require。但是现在用的是es6的import导入，貌似并不兼容（待确认）。  
后来便去goodle上查，果然查到了解决方案：
```javascript
    <input type="file"
        onChange={/*code here*/}
        onClick={(event)=> { 
            event.target.value = null
        }}/>
    //ps:只能定在在行间，不可提取出来
```




### 参考资料
1. [nodemon：自动重启node服务](https://github.com/remy/nodemon/)
2. [express文件上传中间件Multer](https://github.com/expressjs/multer)
