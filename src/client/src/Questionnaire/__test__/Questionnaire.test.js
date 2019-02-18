import React from 'react';
import { mount } from 'enzyme';

import Questionnaire from '../index';

describe('Questionnaire', () => {
    const component = mount(<Questionnaire />);
    
    it('renders the Questionnaire', () => {
        expect(component).to.exist;
    });
});