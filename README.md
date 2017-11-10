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