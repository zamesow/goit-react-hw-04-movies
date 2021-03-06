import React, { Component } from 'react';
import { getTrendingMovies } from '../services/fetch-api';
import MoviesList from '../components/MoviesList';
import m from './MoviesPageView.module.css';

class HomePageView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    getTrendingMovies().then(res => this.setState({ movies: res }));

    localStorage.removeItem('movies');
    localStorage.removeItem('formValue');
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
