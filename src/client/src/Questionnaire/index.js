import React, { Component } from 'react';

import QuestionData from './QuestionData.json';
import LandingPage from './LandingPage';
import QuestionPage from './QuestionPage';

class Questionnaire extends Component {
  componentWillMount = () => {
    this.setState({
      currentSectionNumber: 0,
      section0: { a : 0, b : 3, c : 4, d : 0, e : 2, f : 1 },
      section1: {},
      section2: {},
      section3: {},
      section4: {},
      section5: {},
      section6: {},
      section7: {},
      error: false
    });
  }
  choosePage = currentSectionNumber => {
    switch(currentSectionNumber){
      case 0: return <LandingPage
        exampleData = {QuestionData.sections[0]}
        answers = {this.state.section0}
        />
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

  nextButtonHandler = () => {
    this.setState(
      (prevState, props) => {
        const error = !this.validateAnswers(prevState[`section${prevState.currentSectionNumber}`])
        if (error) return { error }
        return {
          currentSectionNumber: prevState.currentSectionNumber + 1,
          error : false
        };
      });
  }

  prevButtonHandler = () => {
    this.setState(
      (prevState, props) => {
        return {
          currentSectionNumber: prevState.currentSectionNumber - 1,
          error : false
        };
      });
  }

  validateAnswers = answers => {
    let total = 0;
    console.log(answers)
    for (const key in answers) {
      total += answers[key];
    }
    return total === 10;
  }

  updateAnswers = currentSectionNumber => (data, part) => {
    const currentSection = this.state[`section${currentSectionNumber}`];
    currentSection[part] = data;
    this.setState({ [`section${currentSection}`] : currentSection });
  }

  render() {
    return (
      <div className="Questionnaire">
        {this.choosePage(this.state.currentSectionNumber)}
        <input id="PrevButton" type="button" value="Prev" onClick={this.prevButtonHandler} />
        <input id="NextButton" type="button" value="Next" onClick={this.nextButtonHandler} />
        {this.state.error && <span className='error'>
          The fields on this page must sum to exactly 10, before you can continue
          </span> }
      </div>
    );
  }
}

export default Questionnaire;
