import React, { Component } from 'react';

import QuestionData from './QuestionData.json';
import LandingPage from './LandingPage';
import QuestionPage from './QuestionPage';

class Questionnaire extends Component {
  componentWillMount = () => {
    this.setState({
      currentSectionNumber: 0,
      section1: {},
      section2: {},
      section3: {},
      section4: {},
      section5: {},
      section6: {},
      section7: {}
    });
  }
  choosePage = currentSectionNumber => {
    switch(currentSectionNumber){
      case 0: return <LandingPage exampleData = {QuestionData.sections[0]}/>
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        return <QuestionPage
          key = {currentSectionNumber}
          data = {QuestionData.sections[currentSectionNumber]}
          onChange = {this.updateAnswers(currentSectionNumber)}
          answers = {this.state[`section${currentSectionNumber}`]}
        />
      default:
        console.error('Invalid section: Section', currentSectionNumber, 'does not exist'); 
    }
  };

  buttonHandler = delta => () => {
    this.setState(
      (prevState, props) => { return {currentSectionNumber: prevState.currentSectionNumber + delta}; });
  }

  updateAnswers = currentSectionNumber => (data, part) => {
    const currentSection = this.state[`section${currentSectionNumber}`];
    currentSection[part] = data;
    this.setState({ [`section${currentSection}`] : currentSection });
  }

  render() {
    const prevButtonHandler = this.buttonHandler(-1);
    const nextButtonHandler = this.buttonHandler(+1);

    return (
      <div className="Questionnaire">
        {this.choosePage(this.state.currentSectionNumber)}
        <input id="PrevButton" type="button" value="Prev" onClick={prevButtonHandler} />
        <input id="NextButton" type="button" value="Next" onClick={nextButtonHandler} />
      </div>
    );
  }
}

export default Questionnaire;
