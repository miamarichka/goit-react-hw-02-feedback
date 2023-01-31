import React from "react";
import PropTypes from 'prop-types';

export const FeedbackOptions = ({onLeaveFeedback}) => {
    return (
      <>
        <button className="Btn-good" onClick={onLeaveFeedback}>
          Good
        </button>
        <button className="Btn-neutral" onClick={onLeaveFeedback}>
          Neutral
        </button>
        <button className="Btn-bad" onClick={onLeaveFeedback}>
          Bad
        </button>
      </>
    );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};