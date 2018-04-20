import {applyMiddleware, createStore} from 'redux';
import {reducers} from './reducer'
import thunk from "redux-thunk";

export let store = createStore(reducers, applyMiddleware(thunk));
