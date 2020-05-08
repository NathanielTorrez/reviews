import React from 'react';
import styled from 'styled-components';


const PaginationContainer = styled.nav`
`;

const ListContainer = styled.ul`
display:flex;
flex-direction:row;
`;

const ListItem = styled.li`
display:flex;
flex-direction:row;
`;

const PageButton = styled.button`
display:block;
height:32px;
width:32px;
margin: 0px;
padding: 0px;
border:none;
border-radius:50%;
&:hover {
  background-color:teal;
}
&:focus {
  outline:0;
}

`;

const Number = styled.div`
color:teal;
font-size:14px;
padding:2px;
&:hover {
  color:white;
}
`;


const Pagination = ({totalReviews, Paginate, reviewsPerPage}) => {

  const pageNumbers = [];

  for ( let i = 1; i < Math.ceil(totalReviews / reviewsPerPage) + 1; i += 1) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      <ListContainer>
        {pageNumbers.map((page) => (
          <ListItem key={page}>
            <PageButton type="button" onClick={Paginate}>
              <Number>
                {page}
              </Number>
            </PageButton>
          </ListItem>
        ))}
      </ListContainer>
    </PaginationContainer>
  )
}
export default Pagination;