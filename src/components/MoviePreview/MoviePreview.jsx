import React from 'react';

import m from './MoviePreview.module.css';

const MoviePreview = ({ poster_path, title, release_date }) => {
  return (
    <div className={m[`MoviePreview-thumb`]}>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />

      <div className={m[`MoviePreview-titleBlock`]}>
        <h5 className={m[`MoviePreview-title`]}>{`${title}`}</h5>
        {release_date && (
          <h5 className={m[`MoviePreview-title`]}>
            {`(${release_date.slice(0, 4)})`}
          </h5>
        )}
      </div>
    </div>
  );
};

export default MoviePreview;

// 56. приняли пропсы и расписали как надо
// --- добавили классы -> MovieDetailsPageView
