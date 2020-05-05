import React from 'react';
import axios from 'axios';

class Ratings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ratings: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3003/ratings?id=1')
      .then((results) => {
        const { data } = results;
        this.setState({
          ratings: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate() {
  }

  render() {
    return <div>made it to Ratings</div>;
  }
}

export default Ratings;
