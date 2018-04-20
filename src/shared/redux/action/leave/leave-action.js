import {getLeaveSummary} from "../../../service/leave-service";

export const UPDATE_LEAVE_SUMMARY = 'UPDATE_LEAVE_SUMMARY';

export const updateLeaveSummary = (email) => {
    return async (dispatch) => {
        let leaveSummary = await getLeaveSummary(email);

        console.log(leaveSummary);

        dispatch({
            type: UPDATE_LEAVE_SUMMARY,
            value: leaveSummary
        });
    };
};