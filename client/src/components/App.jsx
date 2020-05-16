/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import * as Scroll from 'react-scroll';
// eslint-disable-next-line import/extensions
import Ratings from './Ratings.jsx';
// eslint-disable-next-line import/extensions
import Reviews from './Reviews.jsx';
import Pagination from './Pagination.jsx';
import Search from './Search.jsx';
import SearchedRatingsReplacement from './SearchedRatingsReplacement.jsx';


const ComponentContainer = styled.div`
  line-height:1.43;
  color: #484848;
  background-color:#fff;
  padding-left:150px;
  width:648px;
  height:1650px;
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
      loading: true,
      currentPage: 1,
      reviewsPerPage: 10,
      searchTerm: '',
      searched: false,
      searchResults: [],
      searchButtonColor: '1px solid rgb(235, 235, 235)',
    };
    this.Reset = this.Reset.bind(this);
    this.paginate = this.paginate.bind(this);
    this.SearchClick = this.SearchClick.bind(this);
    this.ChangeBorder = this.ChangeBorder.bind(this);
    this.SearchGetRequest = this.SearchGetRequest.bind(this);
    this.ChangeBorderOnBodyClick = this.ChangeBorderOnBodyClick.bind(this);
  }

  componentDidMount() {
    const rand = Math.floor(Math.random() * 101)
    axios.get(`http://50.18.227.14:3003/reviews?id=${rand}`)
      .then((results) => {
        this.setState({
          reviews: results.data,
        });
        console.log(results.data)
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get(`http://50.18.227.14:3003/ratings?id=${rand}`)
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
      currentPage: page,
    });
    const scroll = Scroll.animateScroll;
    scroll.scrollToTop();
  }

  ChangeBorder(e) {
    e.preventDefault();
    const { searchButtonColor } = this.state;
    if (searchButtonColor === '1px solid rgb(235, 235, 235)') {
      this.setState({
        searchButtonColor: '1px solid teal',
      });
    } else {
      this.setState({
        searchButtonColor: '1px solid rgb(235, 235, 235)',
      });
    }
  }

  ChangeBorderOnBodyClick(e) {
    e.preventDefault();
    this.setState({
      searchButtonColor: '1px solid rgb(235, 235, 235)',
    });
  }

  SearchClick(e) {
    e.preventDefault();
    const term = e.target.value;
    const { searchTerm } = this.state;
    if (term.length < searchTerm.length) {
      this.setState({
        searched: false,
        searchTerm: term,
      });
    } else {
      this.setState({
        searchTerm: term,
      });
    }
  }

  SearchGetRequest(e) {
    e.preventDefault();
    const { searchTerm } = this.state;
    axios.get(`http://localhost:3003/search?id=2&term=${searchTerm}`)
      .then((results) => {
        const { data } = results;
        this.setState({
          searchResults: data,
          searched: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  Reset(e) {
    e.preventDefault();
    this.setState({
      searched: false,
    });
  }

  render() {
    const { ratings } = this.state;
    const { reviews } = this.state;
    const { loading } = this.state;
    const { searched } = this.state;
    const { searchTerm } = this.state;
    const { currentPage } = this.state;
    const { searchResults } = this.state;
    const { reviewsPerPage } = this.state;
    const { searchButtonColor } = this.state;
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReview = reviews.slice(indexOfFirstReview, indexOfLastReview);
    const currentSearchReview = searchResults.slice(indexOfFirstReview, indexOfLastReview);
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
      if (searched) {
        ReviewComp = <Reviews reviews={currentSearchReview} />;
        RatingComp = (
          <SearchedRatingsReplacement
            total={searchResults.length}
            term={searchTerm}
            reset={this.Reset}
          />
        );
        totalReviews = searchResults.length;
      } else {
        ReviewComp = <Reviews reviews={currentReview} />;
        RatingComp = <Ratings searched={searched} rating={ratings[0]} />;
        totalReviews = reviews.length;
      }
      overallRating = ratings[0].rating;
    }
    return (
      <ComponentContainer>
        <Header>
          <Title>Reviews</Title>
          <BottomHeader>
            <Star>&#9733;</Star>
            <HeaderRating>{overallRating}</HeaderRating>
            <TotalReviewsNumber>{totalReviews}</TotalReviewsNumber>
            <TotalReviews> Reviews</TotalReviews>
            <Search
              color={searchButtonColor}
              ChangeBorder={this.ChangeBorder}
              SearchClick={this.SearchClick}
              searchRequest={this.SearchGetRequest}
            />
          </BottomHeader>
        </Header>
        {RatingComp}
        <BodyContainer onClick={this.ChangeBorderOnBodyClick}>{ReviewComp}</BodyContainer>
        <Pagination
          totalReviews={totalReviews}
          reviewsPerPage={reviewsPerPage}
          Paginate={this.paginate}
        />
      </ComponentContainer>
    );
  }
}
export default App;
