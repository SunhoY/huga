import {createStore} from 'redux';
import {reducers} from './reducer'

export let store = createStore(reducers);
