import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './QuestionTable.css';

class QuestionTable extends Component {

    drawRows = categories => {
        let output = [];
        for (const key in categories) {
            output.push(
                <tr key = {key}>
                    <td>{key}.</td>
                    <td>{categories[key]}</td>
                    <td></td>
                </tr>
            )
        }
        return output;
    };

    render() {
      const {className, titleText, categories } = this.props;
      return (
        <table className={className}>
            <thead><tr>
                <th></th>
                <th>{titleText}</th>
                <th>Allocation of Points</th>
            </tr></thead>
            <tbody>
                {this.drawRows(categories)}
            </tbody>
        </table>
    );
  }
}

QuestionTable.propTypes = {
    className : PropTypes.string.isRequired,
    titleText : PropTypes.string.isRequired,
    categories : PropTypes.object.isRequired,
};

export default QuestionTable;
