import React from 'react';
import { shallow } from 'enzyme';

import Login from './index';

describe('Login', () => {
    const component = shallow(<Login />);
    it('has the correct form action', () => {
      const formProps = component.find('form').props();

      expect(formProps.action).to.equal('/login');
      expect(formProps.method).to.equal('post');
    });

    it('renders the username field', () => {
      const username = component.find('.username');
      expect(username.text()).to.equal('Username:');

      const inputProps = username.find('input').props();
      expect(inputProps.type).to.equal('text');
      expect(inputProps.name).to.equal('username');
    });

    it('renders the password field', () => {
      const password = component.find('.password');
      expect(password.text()).to.equal('Password:');

      const inputProps = password.find('input').props();
      expect(inputProps.type).to.equal('password');
      expect(inputProps.name).to.equal('password');
    });

    it('renders the submit field', () => {
      const submit = component.find('.submit');

      const inputProps = submit.find('input').props();
      expect(inputProps.type).to.equal('submit');
      expect(inputProps.value).to.equal('Log In');
    });
});