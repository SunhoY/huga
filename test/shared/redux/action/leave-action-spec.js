import {UPDATE_LEAVE_SUMMARY, updateLeaveSummary} from "../../../../src/shared/redux/action/leave/leave-action";
import {expect} from 'chai';
import sinon from 'sinon';
import * as LeaveService from '../../../../src/shared/service/leave-service';

describe('Leave Action Spec', () => {
    it('returns async function to update leave summary ', () => {
        const action = updateLeaveSummary("my@mail.com");

        expect(action).to.be.a('function');
    });

    describe('Action', () => {
        let action;
        let dispatchSpy = sinon.spy();
        const LEAVE_SUMMARY = {};
        const EMAIL = "my@mail.com";

        beforeEach(() => {
            action = updateLeaveSummary(EMAIL);
            sinon.stub(LeaveService, "getLeaveSummary").returns(Promise.resolve(LEAVE_SUMMARY));
        });

        afterEach(() => {
            LeaveService.getLeaveSummary.restore();
        });

        it('calls leaveService.getLeaveSummary', () => {
            action(dispatchSpy);

            expect(LeaveService.getLeaveSummary.calledWith(EMAIL)).to.be.true;
        });

        it('dispatches update leave summary action', () => {
            action(dispatchSpy);

            return Promise.resolve().then(() => {
                expect(dispatchSpy.calledWith({
                    type: UPDATE_LEAVE_SUMMARY,
                    value: LEAVE_SUMMARY
                })).to.be.true;
            });
        });
    });
});