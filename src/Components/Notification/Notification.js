import React from "react";
import PropTypes from "prop-types";

const Notification = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Notification;

Notification.propTypes = {
  massahe: PropTypes.string.isRequired,
};
