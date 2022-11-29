import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import logo from 'src/img/logo.png';

import { StyledLink, StyledNavigationList } from 'components/Header/styled';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <img src={logo} width={50} height={50} alt="logo" />
      <nav>
        <StyledNavigationList>
          <li>
            <StyledLink to="/">Главная</StyledLink>
          </li>
          <li>
            <StyledLink to="/users">Пользователи</StyledLink>
          </li>
        </StyledNavigationList>
      </nav>
    </Toolbar>
  </AppBar>
);

export default Header;
