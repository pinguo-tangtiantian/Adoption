import { AppAction } from '../interfaces/index';

export default function changeHeaderState(state: any={isLogin: false, menuOn: false}, action: AppAction){
    switch(action.type){
        case "LOG_IN": {
            return Object.assign({}, state, { isLogin: true });
        }
        case "LOG_OUT": {
            return Object.assign({}, state, { isLogin: false });
        }
        case "MENU_ON": {
            return Object.assign({}, state, { menuOn: true });
        }
        case "MENU_OFF": {
            return Object.assign({}, state, { menuOn: false });
        }
        default: {
            return state;
        }
    }
}
