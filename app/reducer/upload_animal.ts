
import { AppAction } from '../interfaces/index';


const initState: any = {
    isFetching: false,
    success: false,
    data: {}
}

export default function uploadAnimal (state: any = initState, action: AppAction) {
    switch(action.type) {
        case "POST_ANIMAL_DATA": {
            return Object.assign({}, state, {
                isFetching: true
            });
        }
        case "RECEIVE_ANIMAL_SUCCESS": {
            return Object.assign({}, state, {
                isFetching: false,
                success: true,
                data: action.data
            });
        }
        case "RECEIVE_ANIMAL_ERROR": {
            return Object.assign({}, state, {
                isFetching: false,
                success: false,
                data: action.data
            });
        }
        default: {
            return state;
        }
    }
}