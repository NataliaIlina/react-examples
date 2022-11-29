import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';
import { StyledContentWrapper } from 'components/Layout/styled';

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
