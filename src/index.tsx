import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import StylesProvider from './ui/StylesProvider/StylesProvider';

const AppComponent = () => (
  <StylesProvider>
    <App />
  </StylesProvider>
);

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<AppComponent />);
