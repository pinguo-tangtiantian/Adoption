import { Action } from 'redux';

export default function changeSignDisplay(state: any={signType: "sign_in"}, action: Action){
    switch(action.type){
        case "SIGN_IN": {
            return Object.assign({}, state, { signType: "sign_in" });
        }
        case "SIGN_UP": {
            return Object.assign({}, state, { signType: "sign_up" });
        }
        case "FIND_PWD": {
            return Object.assign({}, state, { signType: "find_pwd" });
        }
        default: {
            return state;
        }
    }
}
