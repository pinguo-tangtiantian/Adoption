import { applyMiddleware, combineReducers, createStore, StoreCreator, StoreEnhancer } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import * as reducers from './reducer/index';

export default function myCreateStores(){
    const thunkMiddleWare: any = applyMiddleware(thunk);
    const store: any = createStore(
        combineReducers({
            ...reducers,
            routing: routerReducer
        }), thunkMiddleWare
    );
    return store;
}