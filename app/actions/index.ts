import axios from 'axios';
import { AppAction } from '../interfaces/index';



axios.defaults.baseURL = "http://127.0.0.1:3001";


/**
 * 上传动物信息
 */
export const postAnimalData = (): AppAction => {
    return {
        type: "POST_ANIMAL_DATA"
    }
}

/**
 * 上传动物信息成功
 * @param json 返回数据
 */
export const receiveAnimalSuccess = (json: JSON): AppAction => {
    return {
        type: "RECEIVE_ANIMAL_SUCCESS",
        data: json
    }
}

/**
 * 上传动物信息失败
 * @param json 返回数据
 */
export const receiveAnimalError = (json: JSON): AppAction => {
    return {
        type: "RECEIVE_ANIMAL_ERROR",
        data: json
    }
}


/**
 * 上传动物信息至数据库并获得返回结果
 */
export const fetchAnimalData = (data: FormData): any => {
    return (dispatch: any, getState: any ) => {
        dispatch(postAnimalData());
        axios.post('/api/upload_animal', data)
            .then((res: any)=>{
                console.log(res)
                dispatch(receiveAnimalSuccess(res));
            })
            .catch((res: any)=>{
                console.log(res)
                dispatch(receiveAnimalError(res));
            });
    }
}

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