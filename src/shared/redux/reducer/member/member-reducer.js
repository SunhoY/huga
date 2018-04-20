import {LOGIN} from "../../action/member/member-action";

const initialState = {};

export const LOGGED_IN = 'logged in';

export const memberReducer = (state = initialState, action) => {
    if (action.type === LOGIN) {
        const {data: {role, email}} = action;

        return Object.assign({}, state, {role, email, loginState: LOGGED_IN});
    }

    return state;
};