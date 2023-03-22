import React from 'react';
import PropTypes from 'prop-types';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Notification } from '../Notification/Notification';
import { Section } from '../Section/Section';
import {Container} from './Container.styled'

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

  onFeedbackClick = e => {
    switch (e.target.textContent) {
      case 'Good':
        this.setState(prevState => ({
          good: prevState.good + 1,
        }));
        break;
      case 'Neutral':
        this.setState(prevState => ({
          neutral: prevState.neutral + 1,
        }));
        break;
      case 'Bad':
        this.setState(prevState => ({
          bad: prevState.bad + 1,
        }));
        break;
      default:
        alert('Please, rate the servise');
    }
  };

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
      <Container>
        <Section
          title={'Please leave feedback'}
          toRender={<FeedbackOptions onLeaveFeedback={this.onFeedbackClick} />}
        />
        <Section title={'Statistics'} toRender={isFeedbackExist} />
      </Container>
    );
  }
}
