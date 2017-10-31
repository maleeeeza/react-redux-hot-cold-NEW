import React from 'react';
import {shallow} from 'enzyme';

import {GuessCount} from './guess-count';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Renders the guess count', () => {
        const guesses = [10,5,3];
        const guessCount = guesses.length;
        const wrapper = shallow(<GuessCount guessCount={guessCount} />);
        expect(wrapper.contains(guessCount)).toEqual(true);
        expect(wrapper.text()).toEqual(`You've made ${guessCount} guesses!`);

    });
});
