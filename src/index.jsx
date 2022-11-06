import React from 'react';
import { createRoot } from 'react-dom/client';
import App from 'components/App/App';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';

const AppComponent = () => (
  <>
    <CssBaseline />
    <GlobalStyles
      styles={{
        body: {
          backgroundColor: '#e7ebf0',
        },
      }}
    />
    <App />
  </>
);

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<AppComponent />);
