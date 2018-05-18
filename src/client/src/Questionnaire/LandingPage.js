import React, { Component } from 'react';
import QuestionTable from './QuestionTable';

class LandingPage extends Component {
  render() {
      const { exampleData } = this.props;

      return (
      <div className="landingPage">
        <h1>Explanation</h1>
        <p>
          To determine which team role best describes your personality 
          and operating style, consider the statements in each of the 
          sections below. Please note: there are no right or wrong 
          answers, so take as much time as you need to consider each 
          statement honestly.
        </p>  
        <p>
          For each section distribute a total of 10 points among the 
          statements which you think best describe your behaviour. The 
          points may be distributed among several sentences and in 
          extreme cases they might be spread across all statements or 
          all ten points given to one statement only.
        </p>
        <p>  
          Give the most points to the statement which best describes 
          your behaviour and the least points (or no points) to the statements that are least accurate or do not apply.
        </p>
        
        <QuestionTable
          className = "landingPageTable"
          titleText = {exampleData.titleText}
          categories = {exampleData.categories}
          answers = {this.props.answers}
        />
      </div>
    );
  }
}

export default LandingPage;
