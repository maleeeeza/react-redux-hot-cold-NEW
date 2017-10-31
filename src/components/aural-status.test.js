import React from 'react';
import {shallow} from 'enzyme';

import {AuralStatus} from './aural-status';

describe('<AuralStatus />', () => {
    it('Renders without crashing', () => {
        shallow(<AuralStatus />);
    });

    it('Renders the feedback', () => {
        const auralStatus = "Example status";
        const wrapper = shallow(<AuralStatus auralStatus={auralStatus} />);
        expect(wrapper.contains(auralStatus)).toEqual(true);
    });
});
