import React from "react";
import PropTypes from "prop-types";

const Statistick = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>Total: {total}</div>
      <div>Positive percentage: {positivePercentage}%</div>
    </div>
  );
};

export default Statistick;

Statistick.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
