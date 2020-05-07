/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
// eslint-disable-next-line import/extensions
import Ratings from './Ratings.jsx';
// eslint-disable-next-line import/extensions
import Reviews from './Reviews.jsx';
import Pagination from './Pagination.jsx';


const ComponentContainer = styled.div`
  line-height:1.43;
  color: #484848;
  background-color:#fff;
  padding-left:150px;
  width:400px;
  height:1405px;
  font-family: 'Montserrat', sans-serif;
`;

const Header = styled.div`
marign-bottom:12px;
`;

const Title = styled.h1`
font-size:0.9em;
font-weight:650;
color: rgb(72, 72, 72);
box-sizing: border-box;
marign-bottom:8px;
marign-left:-8px;
marign-right:-8px;
border-top:0.5px solid #dfe0df;

`;

const BodyContainer = styled.div`
font-size:0.5em;
`;
const BottomHeader = styled.div`
display:flex;
flex-direction:row;
border-bottom:0.5px solid #dfe0df;
`;

const Star = styled.div`
color:teal;
font-size:0.5em;

`;
const HeaderRating = styled.div`
font-size: 0.6em;
font-weight:500;
color:black;

margin-left:5px;
padding-right:5px;
padding-bottom:5px;
border-right:0.5px solid #dfe0df;
`;
const TotalReviews = styled.div`
font-size: 0.6em;
font-weight:500;
color:black;

margin-left:5px;
padding-right:200px;
padding-bottom:5px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      ratings: [],
      loading:true,
      currentPage:1,
      reviewsPerPage:10,
    };
    this.paginate = this.paginate.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3003/reviews?id=2')
      .then((results) => {
        this.setState({
          reviews: results.data,
        });
        //console.log(results.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get('http://localhost:3003/ratings?id=2')
      .then((results) => {
        this.setState({
          ratings: results.data,
        });
        this.setState({
          loading: false,
        });
        //console.log(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  paginate(e) {
    e.preventDefault();
    const page = e.target.innerHTML;
    this.setState({
      currentPage: page
    })
  }



  render() {
    const { ratings } = this.state;
    const { reviews } = this.state;
    const { loading } = this.state;
    const { currentPage } = this.state;
    const { reviewsPerPage } = this.state;
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReview = reviews.slice(indexOfFirstReview, indexOfLastReview);
    let overallRating;
    let totalReviews;
    let ReviewComp;

    if (loading) {
      overallRating = <div />;
      totalReviews = <div />;
      ReviewComp = <div />;
    } else {
      ReviewComp = <Reviews reviews={currentReview} />;
      overallRating = ratings[0].rating;
      totalReviews = reviews.length;
    }
    return (
      <ComponentContainer>
        <Header>
          <Title>Reviews</Title>
          <BottomHeader>
            <Star>&#9733;</Star>
            <HeaderRating>{overallRating}</HeaderRating>
            <TotalReviews>
              {totalReviews}
              {' '}
              Reviews
            </TotalReviews>
          </BottomHeader>
        </Header>
        <BodyContainer>{ReviewComp}</BodyContainer>
        <Pagination totalReviews={totalReviews} reviewsPerPage={reviewsPerPage} Paginate={this.paginate} />
      </ComponentContainer>
    );
  }
}
export default App;
