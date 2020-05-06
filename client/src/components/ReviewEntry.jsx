import React from 'react';
import PropTypes from 'prop-types';

const ReviewEntry = ({ reviewText, date }) => (
  <div>
    <div>{reviewText}</div>
    <div>{date}</div>
  </div>
);

ReviewEntry.propTypes = {
  reviewText: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ReviewEntry;
