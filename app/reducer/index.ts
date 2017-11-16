import { combineReducers } from 'redux';

import changeHeaderState from './header';
import uploadAnimal from './upload_animal';
import changeSignDisplay from './sign';


export const reducers: any = combineReducers({
    "changeHeaderState": changeHeaderState,
    "uploadAnimal": uploadAnimal,
    "changeSignDisplay": changeSignDisplay
})