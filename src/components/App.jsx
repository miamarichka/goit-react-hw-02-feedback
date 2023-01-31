import React from "react";
import PropTypes from 'prop-types';
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";
import { Notification } from './Notification';
import { Section } from "./Section";

export class App extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedbackClick = (e) => {
    switch (e.target.className) {
      case 'Btn-good':
        this.setState(prevState => ({
          good: prevState.good + 1,
        }));
        break;
      case 'Btn-neutral':
        this.setState(prevState => ({
          neutral: prevState.neutral + 1,
        }));
        break;
      case 'Btn-bad':
        this.setState(prevState => ({
          bad: prevState.bad + 1,
        }));
        break;
      default: 
        alert('Please, rate the servise')
    }
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    let positiveFeedback = Math.round((good / total) * 100) || 0;
    return positiveFeedback;
  }


  render() {
    const { good, neutral, bad } = this.state;
    
     const isFeedbackExist = this.countTotalFeedback() ? (
       <Statistics
         good={good}
         neutral={neutral}
         bad={bad}
         total={this.countTotalFeedback()}
         positivePercentage={this.countPositiveFeedbackPercentage()}
       />
     ) : (
       <Notification message={'There is no feedback'} />
     );

    return (
      <>
        <Section
          title={'Please leave feedback'}
          toRender={<FeedbackOptions onLeaveFeedback={this.onFeedbackClick} />}
      />
        <Section
          title={'Statistics'}
          toRender={isFeedbackExist}
        />
      </>
    );
  }
};
