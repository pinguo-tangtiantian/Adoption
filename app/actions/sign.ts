import axios from 'axios';
import { AppAction } from '../interfaces/index';


axios.defaults.baseURL = "http://127.0.0.1:3001";

/**
 * 上传用户注册信息
 */
const signUpPending = (): AppAction => {
    return {
        type: "SIGN_UP_PENDING"
    }
}

/**
 * 上传用户注册信息成功
 * @param json 返回数据
 */
const signUpSuccess = (json: JSON): AppAction => {
    return {
        type: "SIGN_UP_SUCCESS",
        data: json
    }
}

/**
 * 上传用户注册信息失败
 * @param json 返回数据
 */
const signUpError = (json: JSON): AppAction => {
    return {
        type: "SIGN_UP_ERROR",
        data: json
    }
}

/**
 * 用户注册
 * @param data 注册信息
 */
export const SignUp = (data: FormData): any => {
    return (dispatch: any, getState: any)=>{
        dispatch(signUpPending());
        axios.post('/users/sign_up', data)
            .then((res: any) => {
                console.log(res);
                dispatch(signUpSuccess(res.data));
            })
            .catch((res: any)=>{
                console.log(res);
                dispatch(signUpError(res.data));
            });
    }
}






/**
 * 上传用户登录信息
 */
const signInPending = (): AppAction => {
    return {
        type: "SIGN_IN_PENDING"
    }
}

/**
 * 上传用户登录信息成功
 * @param json 返回数据
 */
const signInSuccess = (json: JSON): AppAction => {
    return {
        type: "SIGN_IN_SUCCESS",
        data: json
    }
}

/**
 * 上传用户登录信息失败
 * @param json 返回数据
 */
const signInError = (json: JSON): AppAction => {
    return {
        type: "SIGN_IN_ERROR",
        data: json
    }
}

/**
 * 用户登录
 * @param data 登录信息
 */
export const SignIn = (data: FormData): any => {
    return (dispatch: any, getState: any)=>{
        dispatch(signInPending());
        axios.post('/users/sign_in', data)
            .then((res: any) => {
                dispatch(signInSuccess(res.data));
            })
            .catch((res: any)=>{
                dispatch(signInError(res.data));
            });
    }
}



/**
 * 发送找回/修改密码申请
 */
const pwdApplyPending = (): AppAction => {
    return {
        type: "PWD_APPLY_PENDING"
    }
}

/**
 * 发送找回/修改密码申请成功
 * @param json 返回数据
 */
const pwdApplySuccess = (json: JSON): AppAction => {
    return {
        type: "PWD_APPLY_SUCCESS",
        data: json
    }
}

/**
 * 发送找回/修改密码申请失败
 * @param json 返回数据
 */
const pwdApplyError = (json: JSON): AppAction => {
    return {
        type: "PWD_APPLY_ERROR",
        data: json
    }
}

/**
 * 找回密码
 * @param data 找回信息
 */
export const pwdApply = (email: string): any => {
    return (dispatch: any, getState: any)=>{
        dispatch(pwdApplyPending());
        axios.get('/users/change_pwd_apply?email='+email)
            .then((res: any) => {
                dispatch(pwdApplySuccess(res.data));
            })
            .catch((res: any)=>{
                dispatch(pwdApplyError(res.data));
            });
    }
}





/**
 * 上传找回/修改密码信息
 */
const pwdModifyPending = (): AppAction => {
    return {
        type: "PWD_MODIFY_PENDING"
    }
}

/**
 * 上传找回密码信息成功
 * @param json 返回数据
 */
const pwdModifySuccess = (json: JSON): AppAction => {
    return {
        type: "PWD_MODIFY_SUCCESS",
        data: json
    }
}

/**
 * 上传找回密码信息失败
 * @param json 返回数据
 */
const pwdModifyError = (json: JSON): AppAction => {
    return {
        type: "PWD_MODIFY_ERROR",
        data: json
    }
}

/**
 * 找回密码
 * @param data 找回信息
 */
export const pwdModify = (data: FormData): any => {
    return (dispatch: any, getState: any)=>{
        dispatch(pwdModifyPending());
        axios.post('/api/retrieve_pwd', data)
            .then((res: any) => {
                dispatch(pwdModifySuccess(res.data));
            })
            .catch((res: any)=>{
                dispatch(pwdModifyError(res.data));
            });
    }
}