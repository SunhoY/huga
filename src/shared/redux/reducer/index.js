import {myInfoReducer} from "./my-info/my-info-reducer";
import {combineReducers} from 'redux';

export const reducers = combineReducers({myInfo: myInfoReducer});