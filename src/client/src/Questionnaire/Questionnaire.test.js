import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import QuestionData from './QuestionData.json';
import Questionnaire from './index';

describe('Questionnaire', () => {
    const mainComponent = mount(<Questionnaire />);

    it('renders the landing page', () => {
        const landingPage = mainComponent.find('landingPage');
        const ExampleQuestionTable = landingPage.find('landingPageTable');
        
        expect(mainComponent).toExist;
        expect(landingPage).toExist;
        expect(ExampleQuestionTable).toExist;
    });
});