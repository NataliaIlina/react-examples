import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';

function Layout() {
  return (
    <div>
      <Header />

      <Outlet />
    </div>
  );
}

export default Layout;
