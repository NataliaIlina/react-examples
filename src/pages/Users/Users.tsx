import React from 'react';

import { StyledContentWrapper } from 'pages/Users/Users.styled';

import UsersTable from 'components/UsersTable/UsersTable';

function Users() {
  return (
    <StyledContentWrapper>
      <UsersTable />
    </StyledContentWrapper>
  );
}

export default Users;
