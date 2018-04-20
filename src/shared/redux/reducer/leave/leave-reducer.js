import {UPDATE_LEAVE_SUMMARY} from "../../action/leave/leave-action";

const initialState = {
    summary: {
        total: 0,
        used: 0,
        onProcess: 0
    }
};

export const leaveReducer = (state = initialState, {type, value}) => {
    if(type === UPDATE_LEAVE_SUMMARY) {
        console.log(value);
        return Object.assign({}, state, {summary: value});
    }

    return state;
};