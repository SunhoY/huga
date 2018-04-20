import React from 'react';
import {JoinForm} from '../../../../src/shared/component/join/join-form';
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, {shallow} from 'enzyme';
import sinon from 'sinon';
import {expect} from 'chai';

Enzyme.configure({ adapter: new Adapter() });

describe("Join Form Spec", () => {
    const EMAIL = 'a@b.com';
    const FIRST_NAME = 'harry';
    const LAST_NAME = 'yang';
    let subject;
    let spyOnSubmit;
    let instance;
    let fakeEvent = {
        preventDefault: sinon.spy()
    };

    beforeEach(() => {
        spyOnSubmit = sinon.spy();

        subject = shallow(<JoinForm onSubmit={spyOnSubmit}/>);
        instance = subject.instance();
    });

    it('executes onJoinSubmit with email & name', () => {
        instance.handleChange(createChangeEvent('email', EMAIL));
        instance.handleChange(createChangeEvent('firstName', FIRST_NAME));
        instance.handleChange(createChangeEvent('lastName', LAST_NAME));

        subject.find('Form').simulate('submit', fakeEvent);

        expect(spyOnSubmit.calledWith(EMAIL, FIRST_NAME, LAST_NAME)).to.be.true;
    });

    const createChangeEvent = (key, value) => {
        return {
            target: {
                id: key,
                value
            }
        };
    }
});