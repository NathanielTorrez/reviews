import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SearchContainer = styled.form`
display:flex;
align-content:center;
margin-bottom:5px;
padding-bottom:5px;
width:100px;
height:14px;
border:1px solid #D8D8D8;
`;
const SearchInput = styled.input`
width:100%;
height:100%;
font-size:10px;
border:none;
&:focus {
  outline:0;
  border:1px solid teal;
}
`;
const SearchButton = styled.button`
 height:130%;
 width:15px;
 border:none;
 &:focus {
  outline:0;
}
`;

const Search = (props) => (
  <SearchContainer>
    <SearchInput type="text" placeholder="Search Reviews">
    </SearchInput>
    <SearchButton type="submit"></SearchButton>
  </SearchContainer>
);
export default Search;