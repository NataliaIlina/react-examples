import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material';
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
