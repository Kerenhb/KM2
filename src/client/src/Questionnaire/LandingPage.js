import React, { Component } from 'react';
import QuestionTable from './QuestionTable';

class LandingPage extends Component {
  render() {
      const { exampleText } = this.props;

      return (
      <div className="landingPage">
        <QuestionTable
          className = "landingPageTable"
          titleText = {exampleText.titleText}
          categories = {exampleText.categories}
        />
      </div>
    );
  }
}

export default LandingPage;
