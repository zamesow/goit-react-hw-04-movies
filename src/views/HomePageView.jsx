import React, { Component } from 'react';
// import { withRoutetr } from 'react-router-dom';
import Axios from 'axios';
import MoviesList from '../components/MoviesList';
import m from './MoviesPageView.module.css';

class HomePageView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const { API, mainUrl } = this.props;
    // console.log(this.props);

    const response = await Axios.get(
      `${mainUrl}/trending/movie/week?api_key=${API}`,
    );
    // console.log(response.data.results);

    this.setState({ movies: response.data.results });

    // if (prevState.movies !== this.state.movies) {    ша (зкумЫефеуюьщмшуы !== ершыюыефеуюьщмшуы) Х
    localStorage.removeItem('movies');
    localStorage.removeItem('formValue');
    // }    Ъ
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={m.container}>
        <h1 className={m.headBlock}>Trending today</h1>
        <div>
          <MoviesList movies={movies} />
        </div>
      </div>
    );
  }
}

export default HomePageView;

// 40. переносим сюда весь код из MoviesPageView, т.к. это должна быть домашняя страница
// --- меняем, где нужно ссылки и адреса с MoviesPageView на HomePageView
// --- в Link нужно добавить "movies" потому что в match.url уже не "/movies", а просто "/"
// --- API выносим в App и передаём сюда пропсом
// 47. переиспользуем компонент MoviesList закидывая в него такие же пропсы как и в MoviesPageView, но с другим пропсом url={}
// 51. удаляем данные в сторэдже
