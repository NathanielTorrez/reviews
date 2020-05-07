/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReviewEntry from './ReviewEntry.jsx';


const Reviews = ({ reviews }) => (
  <div>
    {reviews.map((review) => (
      <ReviewEntry
        key={`${review.ID} + ${review.host_response_id} + ${review.fullDate}`}
        reviewText={review.review_text}
        date={review.fullDate}
        image={review.photo_url}
        name={review._name}
      />
    ))}
  </div>
);
Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Reviews;
