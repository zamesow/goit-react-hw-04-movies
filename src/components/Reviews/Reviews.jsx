import React, { Component } from 'react';

class Cast extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { reviews } = this.props;
    console.log(reviews);

    this.setState({ reviews });
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
