import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ReviewContainer = styled.div`
border-top:0.5px solid #dfe0df;
border-bottom:0.5px solid #dfe0df;
height:80px;
 `;

const ProfilePicture = styled.img`
  height:25px;
  width:25px;
  src: ${props => props.image};
 `;
const ReviewEntry = ({ reviewText, date, name, image }) => (
  <ReviewContainer>
    <ProfilePicture/>
    <div>{reviewText}</div>
    <div>{date}</div>
  </ReviewContainer>
);

ReviewEntry.propTypes = {
  reviewText: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ReviewEntry;
