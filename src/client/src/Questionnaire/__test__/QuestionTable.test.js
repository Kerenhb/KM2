import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import QuestionTable from '../QuestionTable';

const setup = propOverrides => {
  const props = Object.assign(
    {
    className : 'className',
    titleText : 'title',
    categories : { a : 'question1', b : 'question2'},
    answers : { a : 4, b : 6 }
    },
    propOverrides
  );
  
  const component = shallow(<QuestionTable {...props} />);
  const table = component.find('table');
  const inputs = component.find('input');
  return { component, table, inputs };
};

describe('QuestionTable', () => {
    it('updates the state based on the answers prop', () => {
      const answers = { a : 10 };
      const { component } = setup({ answers });
      const state = component.state();

      expect(state.answers).to.deep.equal(answers);
    });

    it.skip('handles the onChange event', () => {
      // TODO: Revisit event simulation
      const onChange = sinon.stub();
      const { inputs } = setup({ onChange });
      const inputField = inputs.first();

      inputField.simulate('onChange', {}); // Doesn't work at the moment
      expect(onChange).to.have.been.called;
    });

    it('renders the table head correctly' , () => {
      const { table } = setup();
      const tableHead = table.find('thead').find('tr');
      const columns = tableHead.find('th');

      expect(columns).to.have.length(3);
      expect(columns.at(0).text()).to.equal('');
      expect(columns.at(1).text()).to.equal('title');
      expect(columns.at(2).text()).to.equal('Allocation of Points');
    });

    it('renders the table rows correctly' , () => {
      const { table } = setup();
      const tableBody = table.find('tbody');
      const rows = tableBody.find('tr');

      // First row
      const firstRowCells = rows.at(0).find('td');
      expect(firstRowCells).to.have.length(3);
      expect(firstRowCells.at(0).text()).to.equal('a.');
      expect(firstRowCells.at(1).text()).to.equal('question1');

      // First row input
      const firstRowInputProps = firstRowCells.at(2).find('input').props();
      expect(firstRowInputProps.type).to.equal('number');
      expect(firstRowInputProps.id).to.equal('0a');
      expect(firstRowInputProps.placeholder).to.equal(0);
      expect(firstRowInputProps.min).to.equal(0);
      expect(firstRowInputProps.max).to.equal(10);
      expect(firstRowInputProps.value).to.equal(4);

      // Second row
      const secondRowCells = rows.at(1).find('td');
      expect(secondRowCells).to.have.length(3);
      expect(secondRowCells.at(0).text()).to.equal('b.');
      expect(secondRowCells.at(1).text()).to.equal('question2');

      // Second row input
      const secondRowInputProps = secondRowCells.at(2).find('input').props();
      expect(secondRowInputProps.type).to.equal('number');
      expect(secondRowInputProps.id).to.equal('0b');
      expect(secondRowInputProps.placeholder).to.equal(0);
      expect(secondRowInputProps.min).to.equal(0);
      expect(secondRowInputProps.max).to.equal(10);
      expect(secondRowInputProps.value).to.equal(6);
    });

    it('takes the sectionNumber from the props when supplied', () => {
      const { inputs } = setup({ sectionNumber : 10 });
      const inputFieldProps = inputs.at(0).props();

      expect(inputFieldProps.id).to.equal('10a')
    });
});