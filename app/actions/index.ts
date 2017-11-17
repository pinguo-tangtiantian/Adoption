import axios from 'axios';
import { AppAction } from '../interfaces/index';

import { fetchAnimalData } from './postAnimal';
import { SignUp, SignIn, RetrievePwd } from './sign';
/**
 * 改变菜单展开状态
 * @param menuState 菜单状态
 */
export const updateMenuState = (menuState: string): AppAction => {
    if(menuState == "on"){
        return {
            type: "MENU_ON",
        }
    }else if(menuState == "off"){
        return {
            type: "MENU_OFF",
        }
    }
}

/**
 * 改变登录状态
 * @param logState 登录状态
 */
export const updateLogState = (logState: string): AppAction => {
    if(logState == "in"){
        return {
            type: "LOG_IN",
        }
    }else if(logState == "out"){
        return {
            type: "LOG_OUT",
        }
    }
}

/**
 * 设置登录/注册框显示
 * @param signType 类型：登录/注册
 */
export const setLogDisplay = (signType: string): AppAction=>{
    if(signType == "sign_in"){
        return {
            type: "SIGN_IN",
        }
    }else if(signType == "sign_up"){
        return {
            type: "SIGN_UP",
        }
    }else if(signType == "find_pwd"){
        return {
            type: "FIND_PWD",
        }
    }
}

export { SignUp, SignIn, RetrievePwd, fetchAnimalData };