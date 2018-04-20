import React from 'react';
import {shallow} from 'enzyme';
import {ConnectedMyPage} from "../../../../src/shared/component/my-page/my-page";
import {Provider} from "react-redux";

describe('MyPage Spec', () => {
    let subject;

    beforeEach(() => {
        subject = shallow(<Provider store={{}}>
            <ConnectedMyPage />
        </Provider>).WrappedComponent;
    });

    it('', () => {

    });
});