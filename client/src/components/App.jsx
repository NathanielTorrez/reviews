/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
// eslint-disable-next-line import/extensions
import Ratings from './Ratings.jsx';
// eslint-disable-next-line import/extensions
import Reviews from './Reviews.jsx';
import Pagination from './Pagination.jsx';
import Search from './Search.jsx'


const ComponentContainer = styled.div`
  line-height:1.43;
  color: #484848;
  background-color:#fff;
  padding-left:150px;
  width:648px;
  height:2285px;
  font-family: 'Montserrat', sans-serif;
`;

const Header = styled.div`
marign-bottom:12px;
`;

const Title = styled.h1`
font-size:24px;
font-weight:700;
color: rgb(72, 72, 72);
box-sizing: border-box;
marign-bottom:8px;
marign-left:-8px;
marign-right:-8px;
border-top:0.5px solid #dfe0df;

`;

const BodyContainer = styled.div`
font-size:14px;
`;
const BottomHeader = styled.div`
display:flex;
flex-direction:row;
border-bottom:0.5px solid #dfe0df;
`;

const Star = styled.div`
color:rgb(0, 132, 137);
font-size:14px;

`;
const HeaderRating = styled.div`
font-size: 18px;
font-weight:800;
color:black;

margin-left:5px;
padding-right:5px;
padding-bottom:5px;
border-right:0.5px solid #dfe0df;
`;
const TotalReviewsNumber = styled.div`
font-size: 18px;
font-weight:800;
color:black;

margin-left:5px;
padding-right:5px;
padding-bottom:5px;
`;
const TotalReviews = styled.div`
font-size:14px;
font-weight:500;
color:black;
margin-left:5px;
padding-right:200px;
margin-top:3px;
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
      searchTerm:'',
      searched:false,
      searchResults:[],
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
        console.log(results.data);
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
    let RatingComp;

    if (loading) {
      overallRating = <div />;
      totalReviews = <div />;
      ReviewComp = <div />;
      RatingComp = <div />;
    } else {
      ReviewComp = <Reviews reviews={currentReview} />;
      RatingComp = <Ratings rating={ratings[0]} />;
      overallRating = ratings[0].rating;
      totalReviews = reviews.length;
    }
    return (
      <ComponentContainer>
        <Header>
          <a name="top">
          <Title>Reviews</Title>
          </a>
          <BottomHeader>
            <Star>&#9733;</Star>
            <HeaderRating>{overallRating}</HeaderRating>
            <TotalReviewsNumber>{totalReviews}</TotalReviewsNumber>
            <TotalReviews> Reviews</TotalReviews>
            <Search />
          </BottomHeader>
        </Header>
        {RatingComp}
        <BodyContainer>{ReviewComp}</BodyContainer>
        <Pagination totalReviews={totalReviews} reviewsPerPage={reviewsPerPage} Paginate={this.paginate} />
      </ComponentContainer>
    );
  }
}
export default App;
