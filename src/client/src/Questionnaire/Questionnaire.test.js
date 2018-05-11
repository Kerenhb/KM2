import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import Questionnaire from './index';
import LandingPage from './landingPage';

describe('Questionnaire', () => {
    const component = mount(<Questionnaire />);

    it('renders the landing page', () => {
        expect(component).toExist;
        expect(component.find(LandingPage)).toExist;
    });
});