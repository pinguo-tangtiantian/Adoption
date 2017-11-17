import axios from 'axios';
import { AppAction } from '../interfaces/index';


axios.defaults.baseURL = "http://127.0.0.1:3001";

/**
 * 上传用户注册信息
 */
const postSignUpInfo = (): AppAction => {
    return {
        type: "POST_SIGN_UP_DATA"
    }
}

/**
 * 上传用户注册信息成功
 * @param json 返回数据
 */
const receiveSignUpSuccess = (json: JSON): AppAction => {
    return {
        type: "RECEIVE_SIGN_UP_SUCCESS",
        data: json
    }
}

/**
 * 上传用户注册信息失败
 * @param json 返回数据
 */
const receiveSignUpError = (json: JSON): AppAction => {
    return {
        type: "RECEIVE_SIGN_UP_ERROR",
        data: json
    }
}

/**
 * 用户注册
 * @param data 注册信息
 */
export const SignUp = (data: FormData): any => {
    return (dispatch: any, getState: any)=>{
        dispatch(postSignUpInfo());
        axios.post('/users/sign_up', data)
            .then((res: any) => {
                console.log(res);
                dispatch(receiveSignUpSuccess(res.data));
            })
            .catch((res: any)=>{
                console.log(res);
                dispatch(receiveSignUpError(res.data));
            });
    }
}






/**
 * 上传用户登录信息
 */
const postSignInInfo = (): AppAction => {
    return {
        type: "POST_SIGN_IN_DATA"
    }
}

/**
 * 上传用户登录信息成功
 * @param json 返回数据
 */
const receiveSignInSuccess = (json: JSON): AppAction => {
    return {
        type: "RECEIVE_SIGN_IN_SUCCESS",
        data: json
    }
}

/**
 * 上传用户登录信息失败
 * @param json 返回数据
 */
const receiveSignInError = (json: JSON): AppAction => {
    return {
        type: "RECEIVE_SIGN_IN_ERROR",
        data: json
    }
}

/**
 * 用户登录
 * @param data 登录信息
 */
export const SignIn = (data: FormData): any => {
    return (dispatch: any, getState: any)=>{
        dispatch(postSignInInfo());
        axios.post('/users/sign_in', data)
            .then((res: any) => {
                dispatch(receiveSignInSuccess(res.data));
            })
            .catch((res: any)=>{
                dispatch(receiveSignInError(res.data));
            });
    }
}



/**
 * 发送找回/修改密码申请
 */
const sendModifyApply = (): AppAction => {
    return {
        type: "SEND_MODIFY_APPLY"
    }
}

/**
 * 发送找回/修改密码申请成功
 * @param json 返回数据
 */
const receiveApplySuccess = (json: JSON): AppAction => {
    return {
        type: "RECEIVE_APPLY_SUCCESS",
        data: json
    }
}

/**
 * 发送找回/修改密码申请失败
 * @param json 返回数据
 */
const receiveApplyError = (json: JSON): AppAction => {
    return {
        type: "RECEIVE_APPLY_ERROR",
        data: json
    }
}

/**
 * 找回密码
 * @param data 找回信息
 */
export const applyModify = (data: FormData): any => {
    return (dispatch: any, getState: any)=>{
        dispatch(sendModifyApply());
        axios.post('/api/change_pwd_apply', data)
            .then((res: any) => {
                dispatch(receiveApplySuccess(res.data));
            })
            .catch((res: any)=>{
                dispatch(receiveApplyError(res.data));
            });
    }
}





/**
 * 上传找回/修改密码信息
 */
const postModifyInfo = (): AppAction => {
    return {
        type: "POST_MODIFY_DATA"
    }
}

/**
 * 上传找回密码信息成功
 * @param json 返回数据
 */
const receiveModifySuccess = (json: JSON): AppAction => {
    return {
        type: "RECEIVE_MODIFY_SUCCESS",
        data: json
    }
}

/**
 * 上传找回密码信息失败
 * @param json 返回数据
 */
const receiveModifyError = (json: JSON): AppAction => {
    return {
        type: "RECEIVE_MODIFY_ERROR",
        data: json
    }
}

/**
 * 找回密码
 * @param data 找回信息
 */
export const ModifyPwd = (data: FormData): any => {
    return (dispatch: any, getState: any)=>{
        dispatch(postModifyInfo());
        axios.post('/api/retrieve_pwd', data)
            .then((res: any) => {
                dispatch(receiveModifySuccess(res.data));
            })
            .catch((res: any)=>{
                dispatch(receiveModifyError(res.data));
            });
    }
}