import React from 'react';
import { mount } from 'enzyme';

import Questionnaire from '../index';

describe('Questionnaire', () => {
    const mainComponent = mount(<Questionnaire />);
    
    it('renders the mainComponent', () => {
        expect(mainComponent).to.exist;
    });
});