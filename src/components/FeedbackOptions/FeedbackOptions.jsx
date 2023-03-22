import React from "react";
import PropTypes from 'prop-types';
import { ButtonContainer, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({onLeaveFeedback}) => {
    return (
      <ButtonContainer>
        <Button className="Btn-good" onClick={onLeaveFeedback}>
          Good
        </Button>
        <Button className="Btn-neutral" onClick={onLeaveFeedback}>
          Neutral
        </Button>
        <Button className="Btn-bad" onClick={onLeaveFeedback}>
          Bad
        </Button>
      </ButtonContainer>
    );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};