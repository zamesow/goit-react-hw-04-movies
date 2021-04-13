import React, { Component } from 'react';

class Reviews extends Component {
  render() {
    const { reviews } = this.props;

    // console.log(reviews);
    return (
      <>
        {reviews.length === 0 && "We don't have any reviews for this movie"}

        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{`Author: ${author}`}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Reviews;

// 38. рендерим пришедший пропс (почему-то не работает с ф-цией, а только с классом)
// 39. теперь страница HomePageView
