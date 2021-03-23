import React from 'react';
import { Link } from 'react-router-dom';

const SearchMovies = ({ movies, url }) => {
  return (
    <>
      <h2>SearchMovies</h2>
      <ul className="">
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${url}/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>

      {/* <Route path="/movie/:movieId" render={props =>  {return {...props} } /> */}
    </>
  );
};

export default SearchMovies;
