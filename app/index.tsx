import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import myCreateStores from './store';

import AlertBox from './components/common/alert_box';
import Navigator from './components/common/top_nav';
import Footer from './components/common/footer';
import HomePage from './components/pages/home';
import UploadPage from './components/pages/upload';
// import { GuidePage } from './components/pages/guide';
import SignPage from './components/pages/login';
import ModifyPwd from './components/pages/modify_pwd';
import './static/css/style.css';







const routes = {
    home: ()=>{ 
        return <HomePage />
    },
    login: ()=>{
        return <SignPage />
    },
    upload: ()=>{
        return <UploadPage />
    },
    modify_pwd: ()=>{
        return <ModifyPwd />
    },
}
const store: any = myCreateStores();
ReactDOM.render(
    <Provider store={store}>
        <Router >
            <div className="container">
                <Navigator />
                <AlertBox />
                {/* 首页 */}
                <Route exact path="/" render={routes.home} />
                <Route path="/home" component={HomePage} />

                {/* 登录页 */}
                <Route path="/login" render={routes.login} />

                {/* 上传动物信息页 */}
                <Route path="/upload" component={routes.upload} />

                {/* 修改密码页面 */}
                <Route path="/modify_pwd" component={routes.modify_pwd} />
                <Footer />
            </div>
        </Router>
    </Provider>
    , document.getElementById("app")
)