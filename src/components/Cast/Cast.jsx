import React, { Component } from 'react';

class Cast extends Component {
  render() {
    const { cast } = this.props;

    return (
      <>
        <h1>Cast</h1>

        <ul>
          {cast.map(({ id, original_name }) => (
            <li key={id}>
              <p>{original_name}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;

// 37. рендерим пришедший пропс (почему-то не работает с ф-цией, а только с классом), повторяем в Review
