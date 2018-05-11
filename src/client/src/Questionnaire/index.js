import React, { Component } from 'react';

import QuestionData from './QuestionData.json';
import LandingPage from './LandingPage';

class Questionnaire extends Component {
  render() {
    return (
      <div className="Questionnaire">
        <LandingPage 
        exampleText = {QuestionData.sections[0]}/>
      </div>
    );
  }
}

export default Questionnaire;
