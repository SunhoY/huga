import {expect} from 'chai';
import {createMember, memberTransformer, EMPLOYEE} from "../../../src/shared/model/member";

describe('Member Spec', () => {
    let documentItem;
    const EMAIL = "test@email.com";
    const FIRST_NAME = "Harry";
    const LAST_NAME = "Yang";

    beforeEach(() => {
        documentItem = {
             email: EMAIL,
             firstName: FIRST_NAME,
             lastName: LAST_NAME,
             role: "employee",
             verified: true
         }
    });

    it('transforms DocumentItem to Member model', () => {
        const member = memberTransformer(documentItem);

        expect(member).to.deep.equal(createMember(EMAIL, FIRST_NAME, LAST_NAME, EMPLOYEE, true));
    });
});