import React from 'react';
import { shallow } from 'enzyme';

import LandingPage from '../LandingPage';
import QuestionTable from '../QuestionTable';

describe('LandingPage', () => {
    const exampleData = {
      titleText : 'title',
      categories : { a : 'question'}
    };
    const answers = { a : 5, b : 5 };
    
    const component = shallow(
      <LandingPage
        exampleData = {exampleData}
        answers = {answers}
      />
    );

    it('displays the hard-coded explanation text', () => {
        expect(component.find('h1').text()).to.equal('Explanation');
        expect(component.find('p')).to.have.length(4);
    });

    it('passes the correct props to QuestionTable', () => {
        const QuestionTableProps = component.find(QuestionTable).props();
        
        expect(QuestionTableProps.className).to.equal('landingPageTable');
        expect(QuestionTableProps.titleText).to.equal(exampleData.titleText);
        expect(QuestionTableProps.categories).to.deep.equal(exampleData.categories);
        expect(QuestionTableProps.answers).to.deep.equal(answers);
    });
});