import React from 'react';
import styled from 'styled-components';

const BarContainer = styled.div`
 display:block;
 height:1px;
 width:40px;
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
width:${props => props.percent}%;
`;

const RatingBar = (props) => (

  <BarContainer>
    <Filler percent={props.percent}/>
  </BarContainer>
)
export default RatingBar;