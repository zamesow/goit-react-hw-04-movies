import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import HomePageView from './views/HomePageView';
import MoviesPageView from './views/MoviesPageView';
import MovieDetailsPageView from './views/MovieDetailsPageView';
import NotFoundView from './views/NotFoundView';
// import SearchMovies from './components/SearchMovies';

import m from './App.module.css';

const API = '4f24a465004dec8d1f65f162bb769c3a';
const fetch = 'https://api.themoviedb.org/3';

const App = () => (
  <>
    <ul className={m.AppBar}>
      <li>
        <NavLink exact to="/" className={m.NavLink} activeClassName={m.active}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" className={m.NavLink} activeClassName={m.active}>
          Movies
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Route
        exact
        path="/"
        render={props => {
          return <HomePageView {...props} API={API} fetch={fetch} />;
        }}
      />
      <Route
        exact
        path="/movies"
        render={props => {
          return <MoviesPageView {...props} API={API} fetch={fetch} />;
        }}
      />
      <Route
        path="/movies/:movieId"
        render={props => {
          return <MovieDetailsPageView {...props} API={API} fetch={fetch} />;
        }}
      />
      {/* <Route
        exact
        path="/movies:query"
        render={props => {
          return <SearchMovies {...props} API={API} fetch={fetch} />;
        }}
      /> */}
      <Route component={NotFoundView} />
    </Switch>
  </>
);

// https://developers.themoviedb.org/3/trending/get-trending - список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// /trending/{movie}/{week}

// https://developers.themoviedb.org/3/search/search-movies - поиск кинофильма по ключевому слову на странице фильмов.
// https://developers.themoviedb.org/3/movies/get-movie-details - запрос полной информации о фильме для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-credits - запрос информации о актёрском составе для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-reviews - запрос обзоров для страницы кинофильма.

export default App;

// нам нужно спроэктировать приложение, сделать маршруты, создаём ф-цию
// 4. импорт { Route }
// 5. рендерим раут передавая в него адрес и компонент как ссылку (страница вьюха)
// 6. создаём вьюху HomePageView, импортируем её
// 7. пишем в проп раута component = {} и соответствующий ему path=""
// 8. то же самое делаем с остальными вьюхами
// 9. exact используем там, где нужно точное совпадение, потому что рендер будет даже там, где совпадение path минимальное (HomePageView зарендерится и при /movies, потому что совпадает "/")
('---');
// Cейчас мы можем вводитьадреса только руками, поэтому нам нужно сделатьнормальную навигацию. Если делать ссылку типа <a href="">, то будет перезагрузка браузера, нам это не нужно. Нам нужно только переписать url в адресной строке на тот, который мы укажем, а потом BrouserRouter увидит изменение и перерендерит страницу.

// 10. Импортим Router.Link или { Link }, закинуть в рендер (можно в отдельные <li>), в проп to="" продублировать наши адреса и подписать их между тегами <Link></Link>, он под капотом сам отрендерит теги <a href="">, но изменит только адресную строку без перезагрузки страницы.
// 11. Если перейдём на (пропишем) несуществующий путь, то нужно отрендерить отдельный компонент, создаём NotFoundView. Если не передать в него путь, то он будет рендериться всегда (если не передать путь во всех раутах, то все компоненты будут рендериться всегда). Поэтому ставим Switch, чтобы выбирался только один из.
// 12. Импортируем Router.Switch или { Switch }, обворачиваем им все наши рауты

// 13. Для стилизации вместо Link используем NavLink, он использует 2 пропа для объекта инлайн-стилей (создаём const styles = {}) - базовый и активный, но мы будем использовать module.css, поэтому используем className и activeClassName, а styles удаляем.
// 14. Проверяем применение классов в Elements и видим, что activeClassName применяется к Home постоянно - это потому что как и в случае с Route path="/", так и в NavLink to="/" нужно использовать exact там, где необходимо для точного совпадения.

// 15. Для общих свойств (например один автор нескольких книг) есть специальные параметры
// /authors?_embed=books - объект авторов и свойство с массивом объектов книг (встраивает)
// /books?_expand=author - объект книг и свойство с объектом автора (расширяет)
('---');
// Теперь нам нужно сделать запрос на бекенд при нажатии на ссылку, начнём с коллекции всех фильмов в MoviesPageView
('---');
// 27. добавляем раут для MovieDetailsPageView (если ещё не добавили) и exact, чтоб не смешивался, либо пишем эту строку ниже остальных, если нельзя exact, потому что Switch работает сверху вниз. => MovieDetailsPageView
('---');
// --- API и адрес запроса прописываем в переменные и передаём пропсами во все рауты
