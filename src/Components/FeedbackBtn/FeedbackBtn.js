import React from "react";
import styles from "./Feedback.module.css";
import PropTypes from "prop-types";

const FeedbackBtn = ({ feedbackValue }) => {
  return (
    <div>
      <button className={styles.btn} onClick={feedbackValue} name="good">
        Good
      </button>
      <button className={styles.btn} onClick={feedbackValue} name="neutral">
        Neutral
      </button>
      <button className={styles.btn} onClick={feedbackValue} name="bad">
        Bad
      </button>
    </div>
  );
};

export default FeedbackBtn;

FeedbackBtn.propTypes = {
  feedbackValue: PropTypes.func.isRequired,
};
