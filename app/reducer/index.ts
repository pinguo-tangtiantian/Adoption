import { combineReducers } from 'redux';

import changeHeaderState from './header';
import uploadAnimal from './upload_animal';


export const reducers: any = combineReducers({
    "changeHeaderState": changeHeaderState,
    "uploadAnimal": uploadAnimal
})