import {leaveReducer} from "../../../../src/shared/redux/reducer/leave/leave-reducer";
import {UPDATE_LEAVE_SUMMARY} from "../../../../src/shared/redux/action/leave/leave-action";
import {createLeaveSummary} from "../../../../src/shared/model/leave";
import {expect} from 'chai';

describe('Leave Reducer Spec', () => {
    const ON_PROCESS = 3;
    const TOTAL = 10;
    const USED = 2;

    const updateLeaveSummary = {
        type: UPDATE_LEAVE_SUMMARY,
        value: createLeaveSummary("member@me.com", ON_PROCESS, TOTAL, USED)
    };

    it('updates leave -> summary receiving UPDATE_LEAVE_SUMMARY', () => {
        const {summary: {total, used, onProcess}} = leaveReducer(null, updateLeaveSummary);

        expect(total).to.equal(TOTAL);
        expect(used).to.equal(USED);
        expect(onProcess).to.equal(ON_PROCESS);
    });
});