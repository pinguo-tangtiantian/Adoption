import * as React from 'react';
import { Action, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../actions';

interface SignProps{
    signDisplay: any,
    actions: any
};
interface SignState{};

/**
 * 登录框
 */
export class SignInView extends React.Component<SignProps, SignState>{
    constructor(props: SignProps){
        super(props);
    }

    onChangeToSignUp = () =>{
        this.props.actions.setLogDisplay("sign_up");
    }

    onFindPwd = () => {
        this.props.actions.setLogDisplay("find_pwd");
    }

    render(): JSX.Element{
        const { signType } = this.props.signDisplay;
        return (
            <div className={`sign-box ${signType=='sign_in'?"":"hide"}`}>
                <form className="sign-form" id="sign_up_form" encType="multipart/form-data">
                    <p>
                        <label>邮箱：</label>
                        <input type='text' placeholder='请输入注册邮箱' />
                    </p>
                    <p>
                        <label>密码：</label>
                        <input type='password' placeholder='请输入密码' />
                    </p>
                </form>
                <p>还没有账号？前去<span onClick={this.onChangeToSignUp}>注册</span></p>
                <button onClick={this.onFindPwd}>忘记密码？</button>
                <button>登录</button>
            </div>
        )
    }
}

interface SignUpState{};

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

    render(): JSX.Element{
        const { signType } = this.props.signDisplay;
        return (
            <div className={`sign-box ${signType=='sign_up'?"":"hide"}`}>
                <form className="sign-form" id="sign_up_form" encType="multipart/form-data">
                    <p>
                        <label>昵称：</label>
                        <input type='text' placeholder='请输入用户名' />
                    </p>
                    <p>
                        <label>邮箱：</label>
                        <input type='text' placeholder='请输入邮箱地址' />
                    </p>
                    <p>
                        <label>手机号码：</label>
                        <input type='text' placeholder='请输入手机号码' />
                    </p>
                    <p>
                        <label>密码：</label>
                        <input type='password' placeholder='请输入密码' />
                    </p>
                    <p>
                        <label>确认密码：</label>
                        <input type='password' placeholder='请再次输入密码' />
                    </p>
                </form>
                <p>已有账号？前去<span onClick={this.onChangeToSignIn}>登录</span></p>
                <button>注册</button>
            </div>
        )
    }
}

/**
 * 注册框
 */
export class FindPwdView extends React.Component<SignProps, SignState>{
    constructor(props: SignProps){
        super(props);
    }

    render(): JSX.Element{
        const { signType } = this.props.signDisplay;
        return (
            <div className={`sign-box ${signType=='find_pwd'?"":"hide"}`}>
                <form className="sign-form" id="find_pwd_form" encType="multipart/form-data">
                    <p>
                        <label>邮箱：</label>
                        <input type='text' placeholder='请输入注册邮箱' />
                    </p>
                </form>
                <button>找回密码</button>
            </div>
        )
    }
}

function mapStateToProps(state: any) {
    return {
        signDisplay: state.reducers.changeSignDisplay
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