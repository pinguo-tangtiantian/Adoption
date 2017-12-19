import * as React from 'react';
import { Action, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../actions';

interface SignProps{
    signDisplay: any,
    actions: any,
    userSign: any
};
interface SignState{
    userInfo: any
};

/**
 * 登录框
 */
export class SignInView extends React.Component<SignProps, SignState>{
    constructor(props: SignProps){
        super(props);
        this.state = {
            userInfo: {}
        }
    }

    onChangeToSignUp = () =>{
        this.props.actions.setLogDisplay("sign_up");
    }

    onFindPwd = () => {
        this.props.actions.setLogDisplay("find_pwd");
    }

    onUserChange = (event) => {
        const field = event.target.name;
        const user = this.state.userInfo;
        user[field] = event.target.value;
    
        this.setState({
            userInfo: user
        });
    }

    onSignIn = (event) => {
        const { userInfo } = this.state;
        this.props.actions.SignIn(userInfo);
    }

    render(): JSX.Element{
        const { signType } = this.props.signDisplay;
        const { success } = this.props.userSign;
        return (
            <div className={`sign-box ${signType=='sign_in'?"":"hide"}`}>
                <p className="sign-title">登 录</p>
                <form className="sign-form" id="sign_in_form">
                    <p>
                        {/* <label>邮箱：</label> */}
                        <input type='text' name="email" placeholder='邮箱' onChange={this.onUserChange} />
                    </p>
                    <p>
                        {/* <label>密码：</label> */}
                        <input type='password' name="password" placeholder='密码' onChange={this.onUserChange}/>
                    </p>
                <p className="tips">
                    还没有账号？前去
                    <span className="highlight" onClick={this.onChangeToSignUp}>注册</span>
                    <span className="highlight float-right" onClick={this.onFindPwd}>忘记密码？</span>
                </p>
                
                <input type="button" className="btn btn-lg" value="登录" onClick={this.onSignIn} />
                </form>
                {success&&<p>登录成功</p>}
            </div>
        )
    }
}


/**
 * 注册框
 */
export class SignUpView extends React.Component<SignProps, SignState>{
    constructor(props: SignProps){
        super(props);
    }

    onChangeToSignIn = () =>{
        this.props.actions.setLogDisplay("sign_in");
    }

    onSignUp = (event) => {
        event.preventDefault();
        const dom: HTMLFormElement = document.getElementById("sign_up_form") as HTMLFormElement;
        const form: FormData = new FormData(dom);
        this.props.actions.SignUp(form);
    }

    render(): JSX.Element{
        const { signType } = this.props.signDisplay;
        console.log(this.props.userSign)
        return (
            <div className={`sign-box ${signType=='sign_up'?"":"hide"}`}>
                <form className="sign-form" id="sign_up_form" encType="multipart/form-data" name="sign_up_form">
                    <p>
                        {/* <label>昵称：</label> */}
                        <input type='text' name='username' placeholder='用户名' />
                    </p>
                    <p>
                        {/* <label>邮箱：</label> */}
                        <input type='text' name='email' placeholder='邮箱' />
                    </p>
                    <p>
                        {/* <label>手机号码：</label> */}
                        <input type='text' name='telephone' placeholder='手机号码' />
                    </p>
                    <p>
                        {/* <label>密码：</label> */}
                        <input type='password' name='password' placeholder='密码' />
                    </p>
                    <p>
                        {/* <label>确认密码：</label> */}
                        <input type='password' placeholder='确认密码' />
                    </p>
                <p className="tips">已有账号？前去<span className="highlight" onClick={this.onChangeToSignIn}>登录</span></p>
                <input type="button" className="btn btn-lg" onClick={this.onSignUp} value="注册" />
                </form>
            </div>
        )
    }
}

/**
 * 找回密码
 */
export class FindPwdView extends React.Component<SignProps, SignState>{
    constructor(props: SignProps){
        super(props);
    }

    onSendApply = (event) => {
        event.preventDefault();

        const dom: HTMLInputElement = document.getElementById("change_email") as HTMLInputElement;
        const email: string = dom.value;
        this.props.actions.pwdApply(email);

    }

    render(): JSX.Element{
        const { signType } = this.props.signDisplay;
        return (
            <div className={`sign-box ${signType=='find_pwd'?"":"hide"}`}>
                <form className="sign-form" id="find_pwd_form">
                <p className="tips">我们将会发送一份邮件到您的邮箱，<br />请注意查收</p>
                    <p>
                        {/* <label>邮箱：</label> */}
                        <input type='text' name="email" id="change_email" placeholder='请输入注册邮箱' />
                    </p>
                </form>
                <input type="button" className="btn btn-lg" onClick={this.onSendApply} value="找回密码" />
            </div>
        )
    }
}

function mapStateToProps(state: any) {
    return {
        signDisplay: state.reducers.changeSignDisplay,
        userSign: state.reducers.userSign
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

const SignIn = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInView);

const SignUp = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpView);

const FindPwd = connect(
    mapStateToProps,
    mapDispatchToProps
)(FindPwdView);

export { SignIn, SignUp, FindPwd };