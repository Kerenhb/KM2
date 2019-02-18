import React from 'react';
import { shallow } from 'enzyme';

import ErrorPage from './index';

describe('ErrorPage', () => {
    const mainComponent = shallow(<ErrorPage />);

    it('displays the error test', () => {
      const div = mainComponent.find('div');
      expect(div.text()).to.equal('Error!');
    });
});