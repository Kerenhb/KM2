import React, { Component } from 'react';
import QuestionTable from './QuestionTable';

class QuestionPage extends Component {
  render() {
      const { data } = this.props;

      return (
      <div className={`Section ${data.sectionNumber}`}>
        <h1>{`Section ${data.sectionNumber}`}</h1>
        <QuestionTable
          className = {`Section${data.sectionNumber} Table`}
          titleText = {data.titleText}
          categories = {data.categories}
        />
      </div>
    );
  }
}

export default QuestionPage;
