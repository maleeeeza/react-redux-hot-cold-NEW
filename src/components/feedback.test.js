import React from 'react';
import {shallow} from 'enzyme';

import {Feedback} from './feedback';

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback />);
    });

    it('Renders the feedback', () => {
        const feedback = "Example feedback";
        const wrapper = shallow(<Feedback feedback={feedback} />);
        expect(wrapper.contains(feedback)).toEqual(true);
    });
});
