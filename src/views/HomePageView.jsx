import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Axios from 'axios';
import SearchMovies from '../components/SearchMovies';

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
  }

  render() {
    const { movies } = this.state;
    const { url, path } = this.props.match;
    // console.log(url);
    return (
      <>
        <div>
          <h1>Trending today</h1>

          <Route
            path={`${path}`}
            render={props => {
              return (
                <SearchMovies {...props} movies={movies} url={`${url}movies`} />
              );
            }}
          />
        </div>
      </>
    );
  }
}

export default HomePageView;

// 40. переносим сюда весь код из MoviesPageView, т.к. это должна быть домашняя страница
// --- меняем, где нужно ссылки и адреса с MoviesPageView на HomePageView
// --- в Link нужно добавить "movies" потому что в match.url уже не "/movies", а просто "/"
// --- API выносим в App и передаём сюда пропсом
// 47. переиспользуем компонент SearchMovies закидывая в него такие же пропсы как и в MoviesPageView, но с другим пропсом url={}
