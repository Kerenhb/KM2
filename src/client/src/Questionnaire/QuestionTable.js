import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './QuestionTable.css';

class QuestionTable extends Component {
    onChange = (part, event) => {
        this.props.onChange(event.target.value, part); 
      }

    drawRows = (categories, sectionNumber) => {
        let output = [];
        for (const part in categories) {
            output.push(
                <tr key = {`${sectionNumber}${part}`}>
                    <td>{part}.</td>
                    <td>{categories[part]}</td>
                    <td><input
                        type="number"
                        id={`${sectionNumber}${part}`}
                        placeholder='0' min='0' max='10'
                        onChange={(event) => this.onChange(part, event)}/></td>
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
    sectionNumber : PropTypes.number,
    onChange : PropTypes.func,
};

QuestionTable.defaultProps = {
    onChange : () => {}
}

export default QuestionTable;
