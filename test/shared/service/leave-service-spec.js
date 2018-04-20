import sinon from 'sinon';
import {expect} from 'chai';
import {getLeaveSummary} from "../../../src/shared/service/leave-service";
import * as DocumentClient from '../../../src/aws-client/document-client';
import {documentClientStub} from "../../stub/document-client-stub";
import * as AwsClientCallback from '../../../src/aws-client/callback';
import {leaveSummaryTransformer} from '../../../src/shared/model/leave';

describe('Leave Service Spec', () => {
    const EMAIL = 'email@email.com';

    let getCallbackSpy = sinon.spy();

    beforeEach(() => {
        sinon.stub(DocumentClient, 'get').returns(documentClientStub);
        sinon.stub(AwsClientCallback, 'getCallback').returns(getCallbackSpy);
    });

    afterEach(() => {
        DocumentClient.get.restore();
        AwsClientCallback.getCallback.restore();
    });

    it('gets document client', () => {
        getLeaveSummary(EMAIL);

        expect(documentClientStub.get.called).to.be.true;
    });

    it('calls get with TableName, Key', () => {
        getLeaveSummary(EMAIL);

        expect(documentClientStub.get.calledWith({
            TableName: 'leave_summary',
            Key: {ownerEmail: EMAIL}
        }, getCallbackSpy)).to.be.true;
    });

    it('passes callback with transformer', () => {
        getLeaveSummary(EMAIL);

        expect(AwsClientCallback.getCallback.calledWith(sinon.match.func,
            sinon.match.func, leaveSummaryTransformer)).to.be.true;
    });
});