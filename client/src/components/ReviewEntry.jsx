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
  border-radius:50%;
  padding-bottom:5px;
  padding-top:2px;
 `;

const Date = styled.div`
 padding-bottom:5px;
 `;
const ReviewEntry = ({ reviewText, date, name, image }) => (
  <ReviewContainer>
    <ProfilePicture src={image} ></ProfilePicture>
    <Date>{date}</Date>
    <div>{reviewText}</div>
  </ReviewContainer>
);

ReviewEntry.propTypes = {
  reviewText: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ReviewEntry;
