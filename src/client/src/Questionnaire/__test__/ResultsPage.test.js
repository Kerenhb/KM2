import React from 'react';
import { shallow } from 'enzyme';

import ResultsPage from '../ResultsPage';

describe('ResultsPage', () => {
    const results = [0, 10, 20, 30, 0, 0, 0, 0];
    
    const component = shallow(
      <ResultsPage results = {results} />
    );

    it('correctly calculates top three roles', () => {
        const topRoles = component.find('.topRoles');

        expect(topRoles.text()).to.include('Plant');
        expect(topRoles.text()).to.include('Shaper');
        expect(topRoles.text()).to.include('Coordinator');
    });

    it('renders the ResultsTables head', () => {
      const resultsTable = component.find('.ResultsTable');
      const tableHeadText = resultsTable.find('thead').text();

      expect(tableHeadText).to.include('Type');
      expect(tableHeadText).to.include('Typical Features');
      expect(tableHeadText).to.include('Strengths');
      expect(tableHeadText).to.include('Allowable Weakness');
  });

  it('renders the ResultsTables body', () => {  
    const resultsTable = component.find('.ResultsTable');
    const tableBody = resultsTable.find('tbody');
    const rows = tableBody.find('tr');

    expect(rows).to.have.length(6); // 2 per role
  });

  it('renders the detailed results', () => {  
    const detailedResults = component.find('.detailedResults');

    expect(detailedResults.find('li')).to.have.length(8);
    expect(detailedResults.text()).to.include('Implementer - 0%');
    expect(detailedResults.text()).to.include('Coordinator - 14%');
    expect(detailedResults.text()).to.include('Shaper - 29%');
    expect(detailedResults.text()).to.include('Plant - 43%');
    expect(detailedResults.text()).to.include('Resource Investigator - 0%');
    expect(detailedResults.text()).to.include('Monitor Evaluator - 0%');
    expect(detailedResults.text()).to.include('Team Worker - 0%');
    expect(detailedResults.text()).to.include('Completer Finisher - 0%');
  });
});