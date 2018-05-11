import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import QuestionData from './QuestionData.json';
import Questionnaire from './index';
import LandingPage from './landingPage';

describe('Questionnaire', () => {
    const mainComponent = mount(<Questionnaire />);
    const landingPage = mainComponent.find(LandingPage);

    it('renders the landing page', () => {
        expect(mainComponent).toExist;
        expect(landingPage).toExist;
    });
});