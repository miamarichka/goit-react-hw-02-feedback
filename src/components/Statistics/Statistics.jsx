import React from "react";
import PropTypes from 'prop-types';
import { StatItem, StatTextTotal, StatTextPercent } from './Statistics.styled';


export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {

    return (
      <section>
        <ul>
          <StatItem>Good: {good}</StatItem>
          <StatItem>Neutral: {neutral}</StatItem>
          <StatItem>Bad: {bad}</StatItem>
        </ul>
        <StatTextTotal>Total: {total}</StatTextTotal>
        <StatTextPercent>
          Positive feedback: {positivePercentage} %
        </StatTextPercent>
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