import React from 'react';
import { Link } from 'react-router-dom';

const SearchMovies = ({ movies, url }) => {
  return (
    <>
      <ul className="">
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${url}/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchMovies;
