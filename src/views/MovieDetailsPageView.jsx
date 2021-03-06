import React, { Component, Suspense, lazy } from 'react';
import { NavLink, Route } from 'react-router-dom';
// import Axios from 'axios';
import { getCastAndReviews, IMG_URL } from '../services/fetch-api';
import routes from '../routes';

import m from './MovieDetailsPageView.module.css';

const Cast = lazy(() =>
  import('../components/Cast' /* webpackChunkName: "cast" */),
);

const Reviews = lazy(() =>
  import('../components/Reviews' /* webpackChunkName: "reviews" */),
);

class MovieDetailsPageView extends Component {
  state = {
    title: '',
    genres: [],
    overview: '',
    release_date: '',
    vote_average: '',
    poster_path: '',
    cast: [],
    reviews: [],
  };

  async componentDidMount() {
    const { location } = this.props;
    const { slug } = this.props.match.params;

    const movieId = slug.match(/[a-z0-9]+$/)[0];

    getCastAndReviews(movieId).then(castAndReviews =>
      this.setState({
        ...castAndReviews,
        poster_path: IMG_URL + castAndReviews.poster_path,
        cast: castAndReviews.credits.cast,
        reviews: castAndReviews.reviews.results,
      }),
    );

    // пишем в локалсторэдж, потому что при Cast или Reviews меняется url и возвращает не туда
    if (location.state && location.state.from) {
      localStorage.setItem('lastPage', JSON.stringify(location.state.from));
      // console.log(location.state.from);
    }
  }

  handleGoBack = () => {
    const { history } = this.props;

    // if (location.state && location.state.from) {
    //   return history.push(location.state.from);
    // }

    // берём из локалсторэдж, потому что при Cast или Reviews меняется url и возвращает не туда
    const lastPage = localStorage.getItem('lastPage');
    const parsedLastPage = JSON.parse(lastPage);

    if (parsedLastPage) {
      // console.log(parsedLastPage);
      return history.push(parsedLastPage || routes.movies);
    }

    // history.push(location?.state?.from || routes.movies);
  };

  render() {
    const {
      title,
      release_date,
      genres,
      poster_path,
      overview,
      vote_average,
      cast,
      reviews,
    } = this.state;
    const { movies } = this.props;
    const { url, path } = this.props.match;
    const imgUrl = poster_path;
    const voteAverageInPercent = vote_average * 10 + '%';
    // console.log(release_date.slice(0, 4));
    // console.log(`send:`, cast);
    // console.log(this.props.location.state.from);
    return (
      <>
        {/* <Link to={location?.state?.from ?? routes.movies}>
          {location?.state?.from ?? 'Назад'}
        </Link> */}

        <button
          className={m.backBtn}
          type="button"
          onClick={this.handleGoBack}
          movies={movies}
        >
          Назад
        </button>

        {title && (
          <div>
            <div className={m.MovieDetails}>
              <img src={`${imgUrl}`} alt={`poster ${title}`} />
              <div className={m.description}>
                <h1>{`${title} (${
                  release_date ? release_date.slice(0, 4) : 'Coming soon'
                })`}</h1>
                {vote_average ? (
                  <p>{`User score: ${voteAverageInPercent}`}</p>
                ) : (
                  ''
                )}

                {overview && <h3>Overview</h3>}
                <p>{overview}</p>

                <h4>Genres</h4>
                <ul className={m.genres}>
                  {genres.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <hr />

            <p>Addidition information</p>

            <ul>
              <li>
                <NavLink
                  to={`${url}/cast`}
                  className="NavLink"
                  activeClassName="NavLink--active"
                >
                  Cast
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`${url}/reviews`}
                  className="NavLink"
                  activeClassName="NavLink--active"
                >
                  Reviews
                </NavLink>
              </li>
            </ul>

            <hr />

            <Suspense>
              <Route
                path={`${path}/cast`}
                render={props => {
                  return <Cast {...props} cast={cast} />;
                }}
              />
              <Route
                path={`${path}/reviews`}
                render={props => {
                  return <Reviews {...props} reviews={reviews} />;
                }}
              />
            </Suspense>
          </div>
        )}
      </>
    );
  }
}

export default MovieDetailsPageView;

// 26. создаём class. Рендерить этот компонент мы хотим после (вместо) списка всех видео, после добавлению к адресу id выбранного фильма, например /books/:bookId - это просто строка, сама по себе ничего не означающая, ":" значит динамический параметр, означает, что реагировать на всё, что будет после /books/. Эту строку адреса мы так же можем записать в раут App...

// 28. переходим на нашей страничке в Movies и смотрим в тулзы, видим, что зарендерен MoviesPageView, смотрим в его проп match и видим, что isExact: true, а path и url совпадают, но это не значит, что они одинаковые...
// переходим на страницу одного фильма, смотрим туда же на пропы и видим, что isExact: true, а path и url разные.
// смотрим на проп params и видим, что у него идёт определение {path: url}, это как раз потому что в нашем рауте в path стоит динамический параметр ":", означающий, что запись после него movieId - это лишь переменная.
// 29. поэтому, чтобы при переходе на страницу одной книги нам сразу писался идентификатор фильма, мы може писать в заглавии {this.props.match.params.movieId}
// доступ к идентификатору нужен не для названия, а для нового запроса к фильму по id? потому что на эту страницу мы можем перейти не только из /movies, но и набрав вручную, а если до этого небыло запроса на все книги, то и из state в /movies нечего брать
// --- при маунте можем консолить пропсы для наглядности
// 30. делаем запрос при маунте, где параметром книги делаем наш проп с id. Поэтому тут class.
// 31. приходит объект со свойством data и у того объект свойств. Все свойства нам не нужны, поэтому мы можем выбрать необходимые, записать их в стейт и распылить нужный ответ в стейт.
// 32. Рендерим разметку:
// --- деструктуризируем стейт, вытягиваем свойства
// --- деструктуризируем значение {movieId} из пропса this.props.match.params
// ---находим в доках правильный запрос для картинок и присваеваем его переменной imageUrl
// --- прописываем разметку для названия, года, рейтинга, описания, постера и жанров
('---');
// теперь делаем вложенный маршрут - это когда на той же странице не переходя на другую у нас открывается что-то, в данном случае - это информации о актёрском составе и обзоры. Раут - это просто компонент, мы можем его вставлять в рендере другого компонента. Так как у нас только кусочек страницы, то мы можем делать не view, а просто компонент
// 33. импортируем NavLink, обворачиваем в него Cast и Review и прописываем to="/movies/:movieId/cast" и ".../review". В to= первую часть url нужно тоже писать динамикой, как мы это делали в MoviesPageView to={`${this.props.match.url}/cast`}
// 34. для добавлеия вложенного свойства Cast в запросе нужно добавить не _embed=credits (_expand=credits), а дополнительный параметр, указаный в доках на сайте &append_to_response=credits после. Смотрим в тулзах на компонент MovieDetailsPageView, на его state.
// 35. нам нужно передать из MovieDetailsPageView в Cast id фильма, сделать это можно через СПЕЦИАЛЬНЫЙ проп render={props => <Cast {...props} /> }. Передавать нужно ф-цию, в которую будут приходить пропы раутера (history, location, match), они передаются автоматически, если мы передаём через component={}, а через рендер нужно вручную, на выходе наш тег с компонентом и в него распыляем эти пропсы и наш список Cast из стейта.
// 36. повторяем с Review и переходим к этим компонентам
('Кнопка НАЗАД');
// 57. добавляем кнопку
// --- смотрим на props.history.push и .replace - нам нужно записать новую запись, взятую из истории
// --- пример с onClick={() => this.props.history.push('/')}
// --- надо рауту MovieDetailsPageView сказать с какого url мы пришли? -> MoviesList
// 59. проверяем с какого url приходим console.log(this.props.location.state.from);
// --- прописываем в onClick={() => this.props.history.push(this.props.location.state.from)}
// --- dsyjcbv это в отдельный метод handleGoBack
// 60. что делать, если пользователь зашел по конечному адресу с пустой страницы?
// --- в таком случае будет location.state: undefined
// --- в handleGoBack пушим при выполнении условия проверки на if(location.state && location.state.from)
// --- если условие не выполняется, то перекидываем на страницу запроса (через готовый импортированный раут)
// --- так же есть современный метод проверки вложенных свойств с помощью оператора "?.", но в результируещем бандле код будет больше, поэтому пока новые технологии не вошли в обиход, лучше писать по олдскульному
// так же можно использовать не метод handleGoBack и кнопку, а ссылку <Link to={location?.state?.from ?? routes.movies}>{location?.state?.from ?? 'Назад'}</Link>

// из-за изменений в url при раутах Cast или Review и при нажатии на кнопку НАЗАД нас выкидывает не на страницу назад, а всегда на routes.movies, поэтому используем запись в локалсторэдж
// -> App

('Suspense, lazy - 01:13:00');
// 63. import {Suspense, lazy}
// --- удаляем статические импорты и добавляем lazy()
// --- обворачивать в <Suspense> можно рауты или конкретно добавляемые компоненты

('Slug');
// меняем проп movieId на { slug } = this.props.match.params;
// меняем в запросе movieId на slug

// 74. нам нужно вытащить id с этого слага
// --- мы не може заранее знать сколько будет символов после /movies/
// --- нужно написать регулярное выражение
// --- переходим в regex101.com
// --- вписываем наш url в test string
// --- в regular expression вписываем условие выражения [a-z0-9]+$ (группа из букв и цифр на которую заканчивается строка)
// --- можем прверить console.log(slug.match(/[a-z0-9]+$/));
// --- .match() возвращает первое совпадение по заданому паттерну (регулярному выражению)
// --- из-за того, что нам приходит массив данных, нам нужен элемент под индексом [0]
// 75. вписываем наше выражение в переменную const movieId = slug.match(/[a-z0-9]+$/)[0];
// --- меняем далее slug сново на movieId
// --- лучше делать отдельную ф-цию типа slagGet

// note // ! проверить routes.cast и routes.review
