import React, { Component } from 'react';
import m from './Cast.module.css';

class Cast extends Component {
  render() {
    const { cast } = this.props;

    return (
      <>
        <h1>Cast</h1>

        <ul className={m.cast}>
          {cast.map(({ id, original_name, profile_path }) => (
            <li className={m.castItem} key={id}>
              <img
                className={m.pic}
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt=""
              />
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
