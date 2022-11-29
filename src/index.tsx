import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import CurrentUser from 'pages/CurrentUser/CurrentUser';
import Main from 'pages/Main/Main';
import Users from 'pages/Users/Users';

import Layout from 'components/Layout/Layout';

import StylesProvider from 'ui/StylesProvider/StylesProvider';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="users">
        <Route index element={<Users />} />
        <Route path=":userId" element={<CurrentUser />} />
      </Route>
      <Route path="*" element={<div>404 - страница не найдена</div>} />
    </Route>
  )
);

const AppComponent = () => (
  <StylesProvider>
    <RouterProvider router={router} />
  </StylesProvider>
);

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<AppComponent />);
