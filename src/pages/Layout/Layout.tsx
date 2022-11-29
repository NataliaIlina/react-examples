import React from 'react';
import { Outlet } from 'react-router-dom';

import { StyledContentWrapper } from 'pages/Layout/styled';

import Header from 'components/Header/Header';

function Layout() {
  return (
    <>
      <Header />
      <StyledContentWrapper>
        <Outlet />
      </StyledContentWrapper>
    </>
  );
}

export default Layout;
