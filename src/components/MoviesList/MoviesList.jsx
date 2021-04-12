import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MoviePreview from '../MoviePreview/MoviePreview';
import m from './MoviesList.module.css';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={m.moviesList}>
      {movies.map(({ id, poster_path, title, release_date }) => (
        <li key={id} className={m.item}>
          <Link
            to={{
              pathname: `/movies/${id}`,
              state: { from: location },
            }}
          >
            <MoviePreview
              poster_path={poster_path}
              title={title}
              release_date={release_date}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);
// Саша Репета для чего-то использовал User snippet reexport (посмотреть)

// 52. переиспользуемый компонент MoviesList -> 45. MoviesPageView

// 53. 3 пропа передаются только тому компоненту, который рендерится с помощью Route
// --- в противном случае нужен {withRouter} (ф-ция или компонент высшего порядка? компонент-обёртка)
// --- при экспорте вызывается как ф-ция с ссылкой на основную ф-цию withRouter(MoviesList)
// --- сначала withRouter обворачивает нашу ф-цию, а потом под капотом в неё возвращает пропы, т.е. в HomePageView и MoviesPageView рендерится не MoviesList, а компонент зарендеренный withRouter с таким же именем MoviesList
// 54. т.к. передаются разные url, нужно подготовить исходя из источника
// --- вытягиваем его из match и вставляем динамически
// --- или в нашем случае, т.к. постоянно переходим по одному адресу, жестко его прописать в Link to={/movies/}
// --- withrouter в таком случае не нужен
('---');
// 55. делаем превьюшки фильмов -> MoviePreview
// --- импортируем и рендерим в ссылку компонент превьюшки фильма
// --- распыляем в него проп movie со всеми пропсами
// --- но лучше кидать конкретные пропсы, а не все вподряд (так их видно конкретно и меньше)
('---');
// 58. в Link to= можно передать не только строку, но и объект настроек (props.location) {pathname: `/books/${id}`}
// --- можно так же передавать state с информацией. этой информацией будет весь объект текущей локации location
// --- state: {from: location} - проп, принятый {параметрах}, а чтоб он принялся нужен withRouter
// --- теперь видим в location.state.from.pathname запись последнего url -> MovieDetailsPageView
