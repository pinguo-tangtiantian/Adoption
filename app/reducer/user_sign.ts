import { AppAction } from '../interfaces/index';

export default function userSign(state: any={
    signType: "sign_in",
    pending: false,
    success: false}, action: AppAction){
    switch(action.type){
        case "POST_SIGN_UP_DATA": { //注册中
            return Object.assign({}, state, { 
                signType: "sign_up",
                pending: true,
                success: false
             });
        }
        case "RECEIVE_SIGN_UP_SUCCESS": { //注册成功
            return Object.assign({}, state, { 
                signType: "sign_up",
                pending: false,
                success: true,
                data: action.data
             });
        }
        case "RECEIVE_SIGN_UP_ERROR": { //注册失败
            return Object.assign({}, state, { 
                signType: "sign_up",
                pending: false,
                success: false,
                data: action.data
             });
        }
        case "POST_SIGN_IN_DATA": { //登录中
            return Object.assign({}, state, { 
                signType: "sign_in",
                pending: true,
                success: false
             });
        }
        case "RECEIVE_SIGN_IN_SUCCESS": { //登录成功
            return Object.assign({}, state, { 
                signType: "sign_om",
                pending: false,
                success: true,
                data: action.data
             });
        }
        case "RECEIVE_SIGN_IN_ERROR": { //登录失败
            return Object.assign({}, state, { 
                signType: "sign_in",
                pending: false,
                success: false,
                data: action.data
             });
        }
        case "SEND_MODIFY_APPLY": { //发送修改请求中
            return Object.assign({}, state, { 
                signType: "find_pwd",
                pending: true,
                success: false
             });
        }
        case "RECEIVE_APPLY_SUCCESS": { //发送修改请求成功
            return Object.assign({}, state, { 
                signType: "find_pwd",
                pending: false,
                success: true,
                data: action.data
             });
        }
        case "RECEIVE_APPLY_ERROR": { //发送修改请求失败
            return Object.assign({}, state, { 
                signType: "find_pwd",
                pending: false,
                success: false,
                data: action.data
             });
        }
        default: {
            return state;
        }
    }
}
