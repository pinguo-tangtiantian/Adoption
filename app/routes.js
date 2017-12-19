import AlertBox from './components/common/alert_box';
import Navigator from './components/common/top_nav';
import Footer from './components/common/footer';
import HomePage from './components/pages/home';
import UploadPage from './components/pages/upload';
// import { GuidePage } from './components/pages/guide';
import SignPage from './components/pages/login';
import ModifyPwd from './components/pages/modify_pwd';


const routes = {
    home: ()=>{ return <HomePage /> }
}

export default routes;
