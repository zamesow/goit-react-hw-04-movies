import React, { Component } from 'react';
import Axios from 'axios';

const URL = 'https://api.themoviedb.org/3/movie';
const API = '4f24a465004dec8d1f65f162bb769c3a';

class Cast extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    // const { reviews } = this.props;

    const response = await Axios.get(
      `${URL}/${movieId}/reviews?api_key=${API}&language=ru`,
    );
    console.log(response.data.results);
    this.setState({ reviews: response.data.results });
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        <h1>Reviews</h1>
        {reviews.length !== 0 ? (
          <ul>
            {reviews.map(({ id, author }) => (
              <li key={id}>
                <p>{`${author}`}</p>
              </li>
            ))}
          </ul>
        ) : (
          'This movie do not have reviews'
        )}
      </>
    );
  }
}

export default Cast;
