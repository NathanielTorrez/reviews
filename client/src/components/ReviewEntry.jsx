import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ReviewContainer = styled.div`
border-top:0.5px solid #dfe0df;
border-bottom:0.5px solid #dfe0df;
min-height:132px;
display:flex;
flex-direction:column;
justify-content:space-between;
 `;

const ProfilePicture = styled.img`
  height:44px;
  width:44px;
  border-radius:50%;
  padding-bottom:5px;
  padding-top:2px;
  `;

const DetailsContainer = styled.div`
  display:flex;
  flex-direction:column;
  width:100px;
  height:30px;
  padding-left:3px;
  padding-bottom:2px;
  `;
const UserContainer = styled.div`
display:flex;
flex-direction:row;
width:350px;
height:30px;

`;
const ReviewtextContainer = styled.div`
min-height:48px;
`;
const ReviewText = styled.div`
font-size:16px;
`;
const Name = styled.div`
padding-left:5px;
font-weight:600;
font-size:16px;
`;

const Date = styled.div`
  padding-left:5px;
  padding-bottom:5px;
  font-size:14px;
  font-weight:400px;
 `;
const ReviewEntry = ({
  reviewText, date, name, image,
}) => (
  <ReviewContainer>
    <UserContainer>
      <ProfilePicture src={image} />
      <DetailsContainer>
        <Name>{name}</Name>
        <Date>{date}</Date>
      </DetailsContainer>
    </UserContainer>
    <ReviewtextContainer>
      {reviewText}
    </ReviewtextContainer>
  </ReviewContainer>
);

ReviewEntry.propTypes = {
  reviewText: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ReviewEntry;
