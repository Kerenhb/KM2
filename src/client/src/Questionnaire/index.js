import React, { Component } from 'react';

import QuestionData from './QuestionData.json';
import LandingPage from './LandingPage';
import QuestionPage from './QuestionPage';

class Questionnaire extends Component {
  componentWillMount = () => {
    this.setState({ questionNumber: 0 });
  }
  choosePage = index => {
    switch(index){
      case 0: return (<LandingPage exampleData = {QuestionData.sections[0]}/>)
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        return (<QuestionPage data = {QuestionData.sections[index]}/>)
      default:
        console.error('Invalid index'); 
    }
  };

  nextButtonHandler = () => {
    this.setState(
      (prevState,props) => { return {questionNumber: prevState.questionNumber + 1}; }
   );
  }
  
  render() {
    return (
      <div className="Questionnaire">
        {this.choosePage(this.state.questionNumber)}
        <input id="NextButton" type="button" value="Next" onClick={this.nextButtonHandler} />
      </div>
    );
  }
}

export default Questionnaire;
