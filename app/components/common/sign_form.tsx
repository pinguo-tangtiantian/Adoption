import * as React from 'react';

interface SignInProps{};
interface SignInState{};

export class SignIn extends React.Component<SignInProps, SignInState>{
    constructor(props: SignInProps){
        super(props);
    }

    render(): JSX.Element{
        return (
            <div className="sign-box">
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
                <button>登录</button>
            </div>
        )
    }
}


interface SignUpProps{};
interface SignUpState{};

export class SignUp extends React.Component<SignUpProps, SignUpState>{
    constructor(props: SignUpProps){
        super(props);
    }

    render(): JSX.Element{
        return (
            <div className="sign-box">
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
                <button>注册</button>
            </div>
        )
    }
}