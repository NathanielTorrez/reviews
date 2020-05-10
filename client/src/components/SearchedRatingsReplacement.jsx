import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ReplacementContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;
height:40px;
width:100%;
border-bottom:0.5px solid #dfe0df;
`;

const InnerContainer = styled.div`
display:flex;
flex-direction:row;
height:20px;
width:100%;
`;

const Textcontainer = styled.div`
font-size:14px;
font-weight:400;
width:50%;
`;

const ButtonContainer = styled.button`
width:20%;
color:teal;
font-size:14px;
font-weight:400;
margin-left:30%;
border:none;
&:focus {
  outline: 0;
}
&:hover {
  text-decoration:underline;
  text-decoration-color:teal;
}
`;

const SearchedRatingsReplacement = ({ term, total, reset }) => (
  <ReplacementContainer>
    <InnerContainer>
      <Textcontainer>
        {`${total} guests have mentioned “${term}”`}
      </Textcontainer>
      <ButtonContainer onClick={reset}>
        back to reviews
      </ButtonContainer>
    </InnerContainer>
  </ReplacementContainer>
);

SearchedRatingsReplacement.propTypes = {
  term: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  reset: PropTypes.func.isRequired,
};
export default SearchedRatingsReplacement;
