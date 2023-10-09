import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './NavBar.module.scss';

const NavBar = () => {
  return (
    <header className={s.headerNav}>
      <NavLink to="/" className="header-text">
        Home
      </NavLink>
      <NavLink to="/people" className="header-text">
        People
      </NavLink>
    </header>
  );
};

export default NavBar;
