import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import NotFoundView from './views/NotFoundView';
import routes from './routes';
import './App.module.css';

// const API = "4f24a465004dec8d1f65f162bb769c3a";

const App = () => (
  <>
    {/* <Switch> */}
    <Route exect path={routes.home} component={HomePage}></Route>
    <Route exect path={routes.MoviesPage} component={MoviesPage}></Route>
    <Route
      exect
      path={routes.movieDetails}
      component={MovieDetailsPage}
    ></Route>
    <Route component={NotFoundView}></Route>
    {/* </Switch> */}
  </>
);

// https://developers.themoviedb.org/3/trending/get-trending - список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// https://developers.themoviedb.org/3/search/search-movies - поиск кинофильма по ключевому слову на странице фильмов.
// https://developers.themoviedb.org/3/movies/get-movie-details - запрос полной информации о фильме для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-credits - запрос информации о актёрском составе для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-reviews - запрос обзоров для страницы кинофильма.

// class App extends Component {
//   state = {};

//   render() {
//     return (
//       <>
//         <h1>Hello World</h1>
//       </>
//     );
//   }
// }

export default App;
