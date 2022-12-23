import React from 'react';

import logo from 'src/img/logo.png';

import { StyledLink, StyledNavigationList } from 'components/Header/styled';

import AppBar from 'ui/AppBar/AppBar';

const Header = () => (
  <AppBar position="static">
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
  </AppBar>
);

export default Header;
