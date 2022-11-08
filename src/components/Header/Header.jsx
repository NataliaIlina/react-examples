import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from 'ui/Typography/Typography';

const Header = () => (
  <AppBar>
    <Typography variant="h6" textAlign="center" p="16px">
      Список пользователей
    </Typography>
  </AppBar>
);

export default Header;
