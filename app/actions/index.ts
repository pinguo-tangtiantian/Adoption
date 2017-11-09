import axios from 'axios';
import { AppAction } from '../interfaces/index';

/**
 * 上传动物信息
 */
export const postAnimalData = (data: any): AppAction => {
    return {
        type: "POST_ANIMAL_DATA",
        data: data
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
export const fetchAnimalData = (): any => {
    return (dispatch: any, getState: any ) => {
        const formDom: HTMLFormElement = document.querySelector("#upload_animal_form") as HTMLFormElement;
        const data = new FormData(formDom);
        console.log(data);
        dispatch(postAnimalData(data));
        axios.post('/upload_form', data)
            .then((res: any)=>{
                dispatch(receiveAnimalSuccess(res));
            })
            .catch((res: any)=>{
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