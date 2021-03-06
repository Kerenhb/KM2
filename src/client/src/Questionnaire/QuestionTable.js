import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Questionnaire.css';

class QuestionTable extends Component {
    componentWillMount() {
        this.setState({ answers : this.props.answers })
    }
    onChange = (part, event) => {
        let { value } = event.target;
        value = parseInt(value, 10); // String to int (base 10)
        this.props.onChange(value, part);

        const answers = this.state.answers;
        answers[part] = value;
        this.setState({ answers });
      }

    drawRows = (categories, sectionNumber) => {
        let output = [];
        for (const part in categories) {
            output.push(
                <tr key = {`${sectionNumber}${part}`}>
                    <td>{part}.</td>
                    <td>{categories[part]}</td>
                    <td>
                        <input
                            type="number"
                            id={`${sectionNumber}${part}`}
                            placeholder={0} min={0} max={10}
                            onChange={(event) => this.onChange(part, event)}
                            value={this.state.answers[part]}
                        />
                    </td>
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
    answers : PropTypes.object.isRequired
};

QuestionTable.defaultProps = {
    sectionNumber : 0,
    onChange : () => {}
}

export default QuestionTable;
