import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import logo from 'src/img/logo.png';

import Typography from 'ui/Typography/Typography';

const Header = () => (
  <AppBar>
    <Toolbar>
      <img src={logo} width={50} height={50} alt="logo" />
      <Typography variant="h6" textAlign="center" p="16px">
        Список пользователей
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
