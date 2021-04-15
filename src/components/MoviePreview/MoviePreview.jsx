import React from 'react';
// import slugify from 'slugify';

import m from './MoviePreview.module.css';

const MoviePreview = ({ poster_path, title, release_date }) => {
  return (
    <div className={m[`MoviePreview-thumb`]}>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />

      <div className={m[`MoviePreview-titleBlock`]}>
        <h5 className={m[`MoviePreview-title`]}>{`${title}`}</h5>
        {/* {slugify(`${title} ${id}`, { lower: true })} */}
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

('Slug'); // 70. доп.занятие
// Свойство location.state
// Слаги
// --- [https://dev.to/fayazara/this-free-tools-for-developers-are-45p3]
// --- `slugify` пакет для создания слагов [https://www.npmjs.com/package/slugify]
// --- regexp101 [https://regex101.com/]

// React Query
// --- Ищите туториалы по react query v3
// --- React Hook Form

// Slug - когда в url используется не id ресурса, а красивая строка с добавленым вконце id-шником
// --- удобство в lowercase и тире между словами вместо символов, а вконце id
// --- удобнее для seo
// --- закидывается slugidy('любая строка') и на выходе получаем [любая-строка]
// --- можно передать любой объект настроек:

// --- slugidy('любая строка', {
//        replacement: '-', // чем разделяем
//        remove: undefined, // что убираем
//        lower: false, // нижний регистр, нам нужен true
//        strict: false, // убрать препинания типа запятых, нам нужен true
//        localea: 'vi' // чем разделяем
//      });

// 71.npm i slugify
// --- import slugify from 'slugify';
// --- рендерим для примера все названия фильмов {slugify(title)}
// --- пробуем с объектом настроек
// --- передаём вконце id
// --- убираем импорт и рендер slugify -> MoviesList
