/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import ReviewEntry from './ReviewEntry.jsx';

const Reviews = ({ reviews }) => (
  <div>
    {reviews.map((review) => (
      <ReviewEntry key={review.ID} reviewText={review.review_text} date={review.fullDate} />
    ))}
  </div>
);
Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Reviews;
