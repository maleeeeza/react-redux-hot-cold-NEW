import React from 'react';
import {connect} from 'react-redux';
import Feedback from './feedback';
import GuessForm from './guess-form';

export function GuessSection(props) {
  return (
    <section aria-label="Guess section" aria-describedby="feedback">
      <Feedback />
      <GuessForm />
    </section>
  );
}

export default connect()(GuessSection);
