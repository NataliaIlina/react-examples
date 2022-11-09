import React from 'react';

import { StyledContentWrapper } from 'components/App/App.styled';
import UsersTable from 'components/UsersTable/UsersTable';

function App() {
  return (
    <>
      <Header />
      <StyledContentWrapper>
        <UsersTable />
      </StyledContentWrapper>
    </>
  );
}

export default App;
