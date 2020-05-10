import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const BarContainer = styled.div`
 display:block;
 height:3px;
 width:95px;
 margin-right:12px;
 margin-top:3px;
 border:1px solid black;
 border-radius:50px;
 background:#D8D8D8;
`;

const Filler = styled.div`
border-radius:inherit;
height:100%;
background:rgb(0, 132, 137);
width:${(props) => props.percent}%;
`;

const RatingBar = ({ percent }) => (
  <BarContainer>
    <Filler percent={percent} />
  </BarContainer>
);

RatingBar.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default RatingBar;
