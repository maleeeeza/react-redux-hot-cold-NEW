import React from 'react';
import {shallow, mount} from 'enzyme';

import {TopNav} from './top-nav';
import {restartGame, generateAuralUpdate} from '../actions';

describe('<TopNav />', () => {

    it('Renders without crashing', () => {
          shallow(<TopNav />);
    });


    it('Should dispatch restartGame when the new game is clicked', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch} />);
        const link = wrapper.find('.new');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(restartGame());

    });

    it('Should dispatch generateAuralUpdate when Hear state of game is clicked', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch} />);
        const link = wrapper.find('.status-link');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(generateAuralUpdate());

    });
});
