/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
// eslint-disable-next-line import/extensions
import Ratings from './Ratings.jsx';
// eslint-disable-next-line import/extensions
import Reviews from './Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: null,
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3003/reviews?id=1')
      .then((results) => {
        this.setState({
          reviews: results.data,
        });
        console.log(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { ratings } = this.state;
    const { reviews } = this.state;
    let loading;

    if (reviews === null) {
      loading = (
        <div> </div>
      );
    } else {
      loading = <Reviews reviews={reviews} />;
    }
    return (
      <div>
        <div>{loading}</div>
        <Ratings ratings={ratings} />
      </div>
    );
  }
}
export default App;
