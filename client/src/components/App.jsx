import React from 'react';
import axios from 'axios';

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      reviews: [],
      ratings: []
    }
  }

componentDidMount() {
  axios.get('http://localhost:3003/reviews?id=1')
  .then((results) => {
    this.setState({
      reviews: results.data
    })
  })
  .catch((err) => {
    console.log(err)
  })
  axios.get('http://localhost:3003/ratings?id=1')
  .then((results) => {
    console.log(results.data)
  })
  .catch((err) => {
    console.log(err)
  })
}

  render() {
    return (
    <div>hello dad</div>
    )
  }
}

export default App;