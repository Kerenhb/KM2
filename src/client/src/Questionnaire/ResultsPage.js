import React, { Component } from 'react';
import RoleDescriptions from './RoleDescriptions.json';
import './Questionnaire.css';

class ResultsPage extends Component {
  convertResultsToRoles = () => {
    const { results } = this.props;
    const roleKeys = ['IM', 'CO', 'SH', 'PL', 'RI', 'ME', 'TW', 'CF'];

    const parsedResults = results.map( (result, index) => 
        ({
            role: roleKeys[index],
            percentage: Math.round(result / 0.7), // turn to percentage * (70/100)
        }));

    return parsedResults.sort(function(a,b) { return b.percentage - a.percentage })
  };

  constructRow = (role) => { // Top three roles
      return (<tr>
        <td rowSpan='2'>{RoleDescriptions[role].Type}</td>
        <td>{RoleDescriptions[role].Features}</td>
        <td>{RoleDescriptions[role].Strengths}</td>
        <td>{RoleDescriptions[role].Weaknesses}</td>
    </tr>)
  };

  constructDetailedRows = results => { // All rows
    let rows = [];
    for (let i = 0; i < 8; i++) {
        rows.push(
            <li key = {results[i].role}>
                {RoleDescriptions[results[i].role].Type} - {results[i].percentage}%
            </li>
        )
    }

    return(<ul> {rows} </ul>)
  };

  render() {
        const results = this.convertResultsToRoles();
        const topRole = results[0].role;
        const secondRole = results[1].role
        const thirdRole = results[2].role;
        return (
            <div>
                <p>Your top three roles are: {RoleDescriptions[topRole].Type}, {RoleDescriptions[secondRole].Type} and {RoleDescriptions[thirdRole].Type}.</p>
                <table className='ResultsTable'>
                    <thead><tr>
                        <th>Type</th>
                        <th>Typical Features</th>
                        <th>Strengths</th>
                        <th>Allowable Weakness</th>
                    </tr></thead>
                    <tbody>
                        {this.constructRow(topRole)}
                        <tr className='summary'><td colSpan='3'>{RoleDescriptions[topRole].Summary}</td></tr>
                        {this.constructRow(secondRole)}
                        <tr className='summary'><td colSpan='3'>{RoleDescriptions[secondRole].Summary}</td></tr>
                        {this.constructRow(thirdRole)}
                        <tr className='summary'><td colSpan='3'>{RoleDescriptions[thirdRole].Summary}</td></tr>
                    </tbody>
                </table>
                <div>
                    Here is the detailed (rounded) breakdown of your roles: {this.constructDetailedRows(results)}
                </div>
            </div>
        );
  }
}

export default ResultsPage;
