import React from 'react';
import { StyledAppWrapper } from 'components/App/App.styled';
import UsersTable from 'components/UsersTable/UsersTable';

function App() {
  return (
    <StyledAppWrapper>
      <UsersTable />
    </StyledAppWrapper>
  );
}

export default App;
