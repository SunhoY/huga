import {authenticate, registerNewMember} from '../../../src/shared/service/member-service';
import sinon from 'sinon';
import {expect} from 'chai';
import {createMember} from "../../../src/shared/model/member";
import {documentClientStub} from "../../stub/document-client-stub";
import * as DocumentClient from '../../../src/aws-client/document-client';

describe('Member Service Spec', () => {
    const EMAIL = 'test@3ssoft.co.kr';
    const LAST_NAME = 'last name';
    const FIRST_NAME = 'first name';

    let stubMember;

    beforeEach(() => {
        stubMember = createMember(EMAIL, FIRST_NAME, LAST_NAME);

        sinon.stub(DocumentClient, 'get').returns(documentClientStub);
    });

    afterEach(() => {
        DocumentClient.get.restore();
    });

    describe('Register New Member', () => {
        it('calls DocumentClient.put', () => {
            registerNewMember(stubMember);

            expect(documentClientStub.put.calledWith({
                TableName: 'member',
                Item: stubMember,
                ConditionExpression: 'attribute_not_exists(email)'
            }, sinon.match.func)).to.be.true;
        });

        it('resolves if err is null', () => {
            return new Promise((resolve, reject) => {
                registerNewMember(stubMember).then(() => {
                    expect(true).to.be.true;
                    resolve();
                });

                let callback = documentClientStub.put.lastCall.args[1];
                callback(null);
            });
        });

        it('rejects if err is not null', () => {
            return new Promise((resolve) => {
                registerNewMember(stubMember).catch(() => {
                    expect(true).to.be.true;
                    resolve();
                });

                let callback = documentClientStub.put.lastCall.args[1];
                callback({});
            });
        });
    });

    describe('Authenticate', () => {
        it('gets member with email', () => {
            authenticate(EMAIL, '');
            expect(documentClientStub.get.calledWith(sinon.match.object, sinon.match.func)).to.be.true;

            const param = documentClientStub.get.lastCall.args[0];

            expect(param).to.deep.equal({
                TableName: 'member',
                Key: {email: EMAIL}
            });
        });
    });
});
