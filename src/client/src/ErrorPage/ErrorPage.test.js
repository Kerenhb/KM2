import React from 'react';
import { shallow } from 'enzyme';

import ErrorPage from './index';

describe('ErrorPage', () => {
    const component = shallow(<ErrorPage />);

    it('displays the error test', () => {
      const div = component.find('div');
      expect(div.text()).to.equal('Error!');
    });
});