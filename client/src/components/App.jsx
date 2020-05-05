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
      reviews: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3003/reviews?id=1')
      .then((results) => {
        this.setState({
          reviews: results.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { ratings } = this.state;
    const { reviews } = this.state;
    return (
      <div>
        <Ratings ratings={ratings} />
        <Reviews reviews={reviews} />
      </div>
    );
  }
}
export default App;
