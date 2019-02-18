import React from 'react';
import { shallow } from 'enzyme';
import QuestionPage from '../QuestionPage';
import QuestionTable from '../QuestionTable';

describe('QuestionPage', () => {
    const data = {
      titleText : 'title',
      categories : { a : 'question'},
      sectionNumber : 5
    };
    const onChange = () => {};
    const answers = { a : 10 };
    
    const component = shallow(
      <QuestionPage
        data = {data}
        onChange = {onChange}
        answers = {answers}
      />
    );

    it('renders the section title', () => {
      const title = component.find('h1');

      expect(title.text()).to.equal('Section 5');
    });

    it('passes the correct props to QuestionTable', () => {
        const QuestionTableProps = component.find(QuestionTable).props();
        
        expect(QuestionTableProps.className).to.equal('Section5 Table');
        expect(QuestionTableProps.titleText).to.equal(data.titleText);
        expect(QuestionTableProps.categories).to.deep.equal(data.categories);
        expect(QuestionTableProps.answers).to.deep.equal(answers);
    });
});