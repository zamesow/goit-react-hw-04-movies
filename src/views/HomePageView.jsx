import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class HomePageView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const { API, fetch } = this.props;
    // console.log(this.props);

    const response = await Axios.get(
      `${fetch}/trending/movie/week?api_key=${API}`,
    );
    // console.log(response.data.results);

    this.setState({ movies: response.data.results });
  }

  render() {
    const { movies } = this.state;
    const { url } = this.props.match;
    // console.log(url);
    return (
      <>
        <div className="container-fluid">
          <h1>HomePage</h1>
          <ul className="">
            {movies.map(movie => (
              // eslint-disable-next-line react/prop-types
              <li key={movie.id}>
                <Link to={`${url}movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
          {/* <SearchMovies movies={this.state.movies} /> */}
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
