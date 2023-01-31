import React from "react";
import PropTypes from 'prop-types';


export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {

    return (
      <section>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
        </ul>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage} %</p>
      </section>
    );
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
};