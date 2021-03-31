import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import m from '../../App.module.css';

const Navigation = () => {
  return (
    <nav className={m.AppBar}>
      <NavLink
        exact
        to={routes.home}
        className={m.NavLink}
        activeClassName={m.active}
      >
        Home
      </NavLink>

      <NavLink
        to={routes.movies}
        className={m.NavLink}
        activeClassName={m.active}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;

//  51. обворачиваем навигацию в <nav> -> MoviesList
