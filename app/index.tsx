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
import { HomePage } from './components/pages/home';
import UploadPage from './components/pages/upload';
// import { GuidePage } from './components/pages/guide';
import SignPage from './components/pages/login';

import './static/css/style.css';

const store: any = myCreateStores();
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div className="container">
                <Navigator />
                <AlertBox />
                    <Route exact path="/" component={HomePage} />
                    <Route path="/login" component={SignPage} />
                    <Route path="/upload" component={UploadPage} />
                <Footer />
            </div>
        </Router>
    </Provider>
    , document.getElementById("app")
)