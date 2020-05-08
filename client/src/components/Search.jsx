import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SearchContainer = styled.div`
margin-bottom:9px;
width:187px;
height:32px;
border:${props => props.color};
`;
const ButtonContainer = styled.div`
display:block;
float:right;
font-size:14px;
height:31px;
width:34px;
`;
const SearchForm = styled.form`
width:151px;
height:32px;
font-size:10px;
`;
const SearchInput = styled.input`
height:28px;
width:140px;
border:none;
&:focus {
  outline:0;
}
`;
const SearchButton = styled.button`
height:100%;
width:100%;
border:none;
 &:focus {
  outline:0;
}
`;

const Search = ({ color, ChangeBorder, SearchClick, searchRequest }) => (
  <SearchContainer color={color}>
    <ButtonContainer>
      <SearchButton onClick={searchRequest}>&#128269;</SearchButton>
    </ButtonContainer>
    <SearchForm>
      <SearchInput type="text" placeholder="Search Reviews" onClick={ChangeBorder} onChange={SearchClick}></SearchInput>
    </SearchForm>
  </SearchContainer>
);
export default Search;
