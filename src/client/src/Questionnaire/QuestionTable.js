import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './QuestionTable.css';

class QuestionTable extends Component {

    drawRows = (categories, sectionNumber) => {
        let output = [];
        for (const index in categories) {
            output.push(
                <tr key = {`${sectionNumber}${index}`}>
                    <td>{index}.</td>
                    <td>{categories[index]}</td>
                    <td><input type="number" id={`${sectionNumber}${index}`}
                        placeholder='0' min='0' max='10'/></td>
                </tr>
            )
        }
        return output;
    };

    render() {
      const {className, titleText, categories, sectionNumber } = this.props;
      return (
        <table className={className}>
            <thead><tr>
                <th></th>
                <th>{titleText}</th>
                <th>Allocation of Points</th>
            </tr></thead>
            <tbody>
                {this.drawRows(categories, sectionNumber)}
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
