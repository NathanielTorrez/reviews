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
height:15px;
width:15px;
margin: 0px;
padding: 0px;
border:none;
border-radius:12px;
&:hover {
  background-color:teal;
}
`;

const Number = styled.div`
color:teal;
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
          <ListItem>
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