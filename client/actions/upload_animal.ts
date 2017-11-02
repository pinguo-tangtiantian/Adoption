import axios from 'axios';
import { Action } from '../interfaces/interfaces';

/**
 * 上传动物信息
 */
const postAnimalData = (data: any): Action => {
    return {
        type: "POST_ANIMAL_DATA",
        data: data
    }
}

/**
 * 上传动物信息成功
 * @param json 返回数据
 */
const receiveAnimalSuccess = (json: JSON): Action => {
    return {
        type: "RECEIVE_ANIMAL_SUCCESS",
        data: json
    }
}

/**
 * 上传动物信息失败
 * @param json 返回数据
 */
const receiveAnimalError = (json: JSON): Action => {
    return {
        type: "RECEIVE_ANIMAL_ERROR",
        data: json
    }
}


/**
 * 上传动物信息至数据库并获得返回结果
 */
export const fetchAnimalData = (data: any): any => {
    return (dispatch: any, getState: any ) => {
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