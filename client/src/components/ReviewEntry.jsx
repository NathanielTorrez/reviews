import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ReviewContainer = styled.div`
border-top:0.5px solid #dfe0df;
border-bottom:0.5px solid #dfe0df;
height:65px;
 `;

const ProfilePicture = styled.img`
  height:25px;
  width:25px;
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
padding-bottom:3px;
padding-top:3px;
`;
const ReviewText = styled.div`
padding-top:8px;
height:30px;
width:350px;
`;
const Name = styled.div`
padding-left:5px;
font-weight:700;
font-size:1em;
`;

const Date = styled.div`
  padding-left:5px;
  padding-bottom:5px;
  font-size:0.8em;
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
    <ReviewText>
      {reviewText}
    </ReviewText>
  </ReviewContainer>
);

ReviewEntry.propTypes = {
  reviewText: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ReviewEntry;
