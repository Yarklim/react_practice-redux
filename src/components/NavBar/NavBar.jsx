import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './NavBar.module.scss';

const NavBar = () => {
  return (
    <header>
      <ul className={s.headerNav}>
        <li className={s.headerNavLink}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={s.headerNavLink}>
          <NavLink to="/people/?page=1">People</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
