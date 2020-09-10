import React, { Component } from "react";
import styles from "./Feedback.module.css";
import Statistick from "../Statistick/Statistick";
import Notification from "../Notification/Notification";
import FeedbackBtn from "../FeedbackBtn/FeedbackBtn";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackValue = ({ target }) => {
    const btnName = target.name;
    this.setState((prev) => ({
      [btnName]: prev[btnName] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let total = this.countTotalFeedback();
    let procent = Math.round((this.state.good / total) * 100);
    return procent;
  };

  render() {
    return (
      <div className={styles.feadback}>
        <h2>Please leave feedback</h2>
        <FeedbackBtn feedbackValue={this.feedbackValue} />
        <h3>Statistics</h3>
        {this.countTotalFeedback() > 0 ? (
          <Statistick
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    );
  }
}
export default Feedback;
