import { AppAction } from '../interfaces/index';

export default function userSign(state: any={
    signType: "sign_in",
    pending: false,
    success: false}, action: AppAction){
    switch(action.type){
        case "SIGN_UP_PENDING": { //注册中
            return Object.assign({}, state, { 
                signType: "sign_up",
                pending: true,
                success: false
             });
        }
        case "SIGN_UP_SUCCESS": { //注册成功
            return Object.assign({}, state, { 
                signType: "sign_up",
                pending: false,
                success: true,
                data: action.data
             });
        }
        case "SIGN_UP_ERROR": { //注册失败
            return Object.assign({}, state, { 
                signType: "sign_up",
                pending: false,
                success: false,
                data: action.data
             });
        }
        case "SIGN_IN_PENDING": { //登录中
            return Object.assign({}, state, { 
                signType: "sign_in",
                pending: true,
                success: false
             });
        }
        case "SIGN_IN_SUCCESS": { //登录成功
            return Object.assign({}, state, { 
                signType: "sign_om",
                pending: false,
                success: true,
                data: action.data
             });
        }
        case "SIGN_IN_ERROR": { //登录失败
            return Object.assign({}, state, { 
                signType: "sign_in",
                pending: false,
                success: false,
                data: action.data
             });
        }
        case "PWD_APPLY_PENDING": { //发送修改请求中
            return Object.assign({}, state, { 
                signType: "find_pwd",
                pending: true,
                success: false
             });
        }
        case "PWD_APPLY_SUCCESS": { //发送修改请求成功
            return Object.assign({}, state, { 
                signType: "find_pwd",
                pending: false,
                success: true,
                data: action.data
             });
        }
        case "PWD_APPLY_ERROR": { //发送修改请求失败
            return Object.assign({}, state, { 
                signType: "find_pwd",
                pending: false,
                success: false,
                data: action.data
             });
        }case "PWD_MODIFY_PENDING": { //修改密码请求中
            return Object.assign({}, state, { 
                signType: "modify_pwd",
                pending: true,
                success: false
             });
        }
        case "PWD_MODIFY_SUCCESS": { //修改密码成功
            return Object.assign({}, state, { 
                signType: "modify_pwd",
                pending: false,
                success: true,
                data: action.data
             });
        }
        case "PWD_MODIFY_ERROR": { //修改密码失败
            return Object.assign({}, state, { 
                signType: "modify_pwd",
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
