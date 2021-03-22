import React, { Component } from 'react';

class Cast extends Component {
  render() {
    const { reviews } = this.props;

    console.log(reviews);
    return (
      <>
        <h1>Reviews</h1>

        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;

// 38. рендерим пришедший пропс (почему-то не работает с ф-цией, а только с классом)
// 39. теперь страница HomePageView
