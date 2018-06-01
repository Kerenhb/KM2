import React, { Component } from 'react';

class ResultsPage extends Component {
  convertResultsToRoles = () => {
    const { results } = this.props;
    const roleKeys = ['IM', 'CO', 'SH', 'PL', 'RI', 'ME', 'TW', 'CF'];
    const roles = [];

    results.map( (result, index) => {
        roles.push({
            role: roleKeys[index],
            value: result,
        });
    });

    return roles.sort(function(a,b) { return b.value - a.value })
  };

  render() {
      const roles = this.convertResultsToRoles();
      return (
          <div>
            {roles.map( ({ role, value }) => { return (
                <p>{`You are ${Math.round(value/0.7)}% role ${role}`}</p>
            )})}
          </div>
    );
  }
}

export default ResultsPage;
