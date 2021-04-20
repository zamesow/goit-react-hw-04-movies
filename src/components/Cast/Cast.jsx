import React, { Component } from 'react';
import m from './Cast.module.css';
import userpic from '../../styles/userpic.jpeg';

class Cast extends Component {
  render() {
    const { cast } = this.props;

    return (
      <>
        <ul className={m.cast}>
          {cast.map(({ id, original_name, profile_path }) => (
            <li className={m.castItem} key={id}>
              <img
                className={m.pic}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : userpic
                }
                alt=""
              />
              <p className={m.name}>{original_name}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;

// 37. рендерим пришедший пропс (почему-то не работает с ф-цией, а только с классом), повторяем в Review

// добавили userpic
// --- src при наличии profile_path либо адрес картинки, либо наш userpic
