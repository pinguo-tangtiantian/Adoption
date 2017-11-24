import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import Common from '../../static/js/common';

interface ModifyPwdProps {
    actions: any,
    hasOrgPwd: boolean,
    location: any
};
interface ModifyPwdState { };

/**
 * 登录框
 */
export class ModifyPwd extends React.Component<ModifyPwdProps, ModifyPwdState>{
    constructor(props: ModifyPwdProps) {
        super(props);
    }

    onModifyPwd = () =>{
        const dom: HTMLFormElement = document.getElementById("change_pwd_form") as HTMLFormElement;
        const from: FormData = new FormData(dom);
        this.props.actions.pwdModify(dom);
    }

    render(): JSX.Element {
        const token: string = Common.getUrlParams().token;
        console.log(token)
        if (token == undefined || token == "") {
            return (
                <div className={`sign-box`}>
                    <form className="sign-form" id="change_pwd_form" encType="multipart/form-data">
                        <p>
                            <label>原密码：</label>
                            <input type='text' name="email" placeholder='请输入原密码' />
                        </p>
                        <p>
                            <label>新密码：</label>
                            <input type='text' name="email" placeholder='请输入新密码' />
                        </p>
                        <p>
                            <label>确认密码：</label>
                            <input type='password' name="password" placeholder='请再次输入密码' />
                        </p>
                        <input type="button" value="确认修改" onClick={this.onModifyPwd} />
                    </form>
                </div>
            )
        } else {
            return (
                <div className={`sign-box`}>
                    <form className="sign-form" id="change_pwd_form" encType="multipart/form-data">
                        <p>
                            <label>新密码：</label>
                            <input type='password' placeholder='请输入新密码' />
                        </p>
                        <p>
                            <label>确认密码：</label>
                            <input type='password' name="password" placeholder='请再次输入密码' />
                        </p>
                        <input type="button" value="确认修改" onClick={this.onModifyPwd} />
                    </form>
                </div>
            )
        }
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModifyPwd);