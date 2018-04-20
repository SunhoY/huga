import {leaveReducer} from "./leave/leave-reducer";
import {combineReducers} from 'redux';
import {memberReducer} from "./member/member-reducer";

export const reducers = combineReducers({leaves: leaveReducer, member: memberReducer});