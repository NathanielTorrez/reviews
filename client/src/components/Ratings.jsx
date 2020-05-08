import React from 'react';
import styled from 'styled-components';
import RatingBar from './RatingBar.jsx';

const RatingsConatainer = styled.div`
display:flex;
flex-flow:column wrap;
justify-content:space-between;
height:95px;
font-size:16px;
`;
const RatingItem = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
padding-top:5px;
height:20px;
width:324px;
`;
const RatingName = styled.div`
width:154px;
height:19px;
`;
const RatingScore = styled.div`
width:154px;
height:20px;
display:flex;
flex-direction:row;
font-size:16px;
font-weight:600;
`;

const Ratings = ({ rating }) => (
  <RatingsConatainer>
    <RatingItem>
      <RatingName>Communication</RatingName>
      <RatingScore>
        <RatingBar percent={rating.communication * 20} />
        {rating.communication}
      </RatingScore>
    </RatingItem>
    <RatingItem>
      <RatingName>Location</RatingName>
      <RatingScore>
        <RatingBar percent={rating._location * 20} />
        {rating._location}
      </RatingScore>
    </RatingItem>
    <RatingItem>
      <RatingName>Cleanliness</RatingName>
      <RatingScore>
        <RatingBar percent={rating.cleanliness * 20} />
        {rating.cleanliness}
      </RatingScore>
    </RatingItem>
    <RatingItem>
      <RatingName>Check-in</RatingName>
      <RatingScore>
        <RatingBar percent={rating._checkin * 20} />
        {rating._checkin}
      </RatingScore>
    </RatingItem>
    <RatingItem>
      <RatingName>Accuracy</RatingName>
      <RatingScore>
        <RatingBar percent={rating.accuracy * 20} />
        {rating.accuracy}
      </RatingScore>
    </RatingItem>
    <RatingItem>
      <RatingName>Value</RatingName>
      <RatingScore>
        <RatingBar percent={rating._value * 20} />
        {rating._value}
      </RatingScore>
    </RatingItem>
  </RatingsConatainer>
);
export default Ratings;
