/* eslint-disable no-unused-vars */
import React from 'react';
import { mount, shallow } from 'enzyme';
import styled from 'styled-components';
import Pagination from '../client/src/components/Pagination.jsx';
import RatingBar from '../client/src/components/RatingBar.jsx';
import Ratings from '../client/src/components/Ratings.jsx';
import ReviewEntry from '../client/src/components/ReviewEntry.jsx';
import Reviews from '../client/src/components/Reviews.jsx';
import Search from '../client/src/components/Search.jsx';
import SearchedRatingsReplacement from '../client/src/components/SearchedRatingsReplacement.jsx';
import App from '../client/src/components/App.jsx';


const Ratingstest = (RatingsData) => {
  const wrapper = shallow(<Ratings rating={RatingsData} />);
  return { wrapper };
};

const ReviewTest = (reviews) => {
  const wrapper = shallow(<Reviews reviews={reviews} />);
  return { wrapper };
};

const ReviewEntryTest = (review) => {
  const wrapper = shallow(<ReviewEntry
    reviewText={review.review_text}
    date={review.fullDate}
    image={review.photo_url}
    name={review._name}
  />);
  return { wrapper };
};

const PaginationTest = (totalReviews, reviewsPerPage, Paginate) => {
  const wrapper = shallow(
    <Pagination
      totalReviews={totalReviews}
      reviewsPerPage={reviewsPerPage}
      Paginate={Paginate}
    />,
  );
  return { wrapper };
};

const SearchTest = (color, ChangeBorder, SearchClick, searchRequest) => {
  const wrapper = shallow(<Search color={color} ChangeBorder={ChangeBorder} SearchClick={SearchClick} searchRequest={searchRequest} />);
  return { wrapper };
};
// test for ratings

describe('<Ratings />', () => {
  const RatingsData = {
    ID: 2,
    accuracy: 3.8,
    cleanliness: 4,
    communication: 'textTest',
    home_id: 2,
    rating: 3.3,
    _checkin: 4.5,
    _location: 1.2,
    _value: 3.3,
  };

  const { wrapper } = Ratingstest(RatingsData);

  it('should have class rating name ', () => {
    expect(wrapper.find('.RatingName').exists()).toBe(true);
  });
  it('should have class rating item ', () => {
    expect(wrapper.find('.RatingItem').exists()).toBe(true);
  });
  it('should have class rating score ', () => {
    expect(wrapper.find('.RatingScore').exists()).toBe(true);
  });
  it('should have class rating bar ', () => {
    expect(wrapper.find('.RatingBar').exists()).toBe(true);
  });
  it('should have class rating bar ', () => {
    expect(wrapper.find('.RatingScore').text()).toEqual('<RatingBar />textTest');
  });
});

// test for reviews

describe('<Reviews />', () => {
  const ReviewData = [
    {
      ID: 83,
      review_text: 'The amenities was very much huge. I disliked this, I will be staying here again because of that .',
      user: 83,
      home_id: 2,
      fullDate: 'November 2019',
      host_response_id: 81,
      _name: 'Talon Cunningham',
      photo_url: 'https://photo-bucket-fex.s3.us-west-1.amazonaws.com/steve-halama-dfwFFQLvc0s-unsplash.jpg?AWSAccessKeyId=AKIAJ5Z6AO2XYHLQQQIQ&Expires=1589044861&Signature=kSWxTLR0L%2BY65UA%2BUm%2BhK%2BOeM3U%3D',
    }];

  const { wrapper } = ReviewTest(ReviewData);

  it('Should Contain Review entry', () => {
    expect(wrapper.find('.ReviewEntry').exists()).toBe(true);
  });
});


// test for review entry
describe('<ReviewsEntry />', () => {
  const review = [
    {
      ID: 83,
      review_text: 'The amenities was very much huge. I disliked this, I will be staying here again because of that .',
      user: 83,
      home_id: 2,
      fullDate: 'November 2019',
      host_response_id: 81,
      _name: 'Talon Cunningham',
      photo_url: 'https://photo-bucket-fex.s3.us-west-1.amazonaws.com/steve-halama-dfwFFQLvc0s-unsplash.jpg?AWSAccessKeyId=AKIAJ5Z6AO2XYHLQQQIQ&Expires=1589044861&Signature=kSWxTLR0L%2BY65UA%2BUm%2BhK%2BOeM3U%3D',
    }];

  const { wrapper } = ReviewEntryTest(review[0]);

  it('Should display the review text', () => {
    expect(wrapper.find('.Entry').text()).toEqual('The amenities was very much huge. I disliked this, I will be staying here again because of that .');
  });
  it('Should display the review text', () => {
    expect(wrapper.find('.name').text()).toEqual('Talon Cunningham');
  });
  it('Should display the review text', () => {
    expect(wrapper.find('.date').text()).toEqual('November 2019');
  });
});

describe(' <Pagination />', () => {
  const totalReviews = 20;
  const reviewsPerPage = 10;
  const paginate = () => {
    console.log('made it');
  };

  const { wrapper } = PaginationTest(totalReviews, reviewsPerPage, paginate);

  it('should have a page1', () => {
    expect(wrapper.find('.page1').exists()).toBe(true);
  });
  it('should have a page2', () => {
    expect(wrapper.find('.page2').exists()).toBe(true);
  });
});

describe('<Search />', () => {
  const color = 'red';
  const ChangeBorder = () => {
    console.log('change baorder func');
  };
  const SearchCLick = () => {
    console.log('search click func');
  };
  const searchRequest = () => {
    console.log(' search request func');
  };

  const { wrapper } = SearchTest(color, ChangeBorder, SearchCLick, searchRequest);

  it('should have a color prop being passed in ', () => {
    expect(wrapper.find('.color').exists()).toBe(true);
  });
  it('should have a color prop being passed in ', () => {
    expect(wrapper.find('.searchRequest').exists()).toBe(true);
  });
  it('should have a color prop being passed in ', () => {
    expect(wrapper.find('.changeBorder').exists()).toBe(true);
  });
});
