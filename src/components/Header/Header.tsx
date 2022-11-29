import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import logo from 'src/img/logo.png';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <img src={logo} width={50} height={50} alt="logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/users">Пользователи</Link>
          </li>
          <li>
            <Link to="/users/1">Пользователь</Link>
          </li>
        </ul>
      </nav>
    </Toolbar>
  </AppBar>
);

export default Header;
