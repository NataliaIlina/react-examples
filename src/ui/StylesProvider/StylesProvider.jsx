import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';

const theme = createTheme();

const StylesProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyles
      styles={{
        body: {
          backgroundColor: '#e7ebf0',
        },
      }}
    />
    {children}
  </ThemeProvider>
);

export default StylesProvider;
