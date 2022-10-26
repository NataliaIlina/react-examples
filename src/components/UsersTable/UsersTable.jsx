import React from 'react';
import { StyledTableWrapper, StyledCell, StyledHeadCell, StyledTable } from './styled';
import { users } from './mock';
import { STATUS_TITLE } from 'src/constants';
import { TABLE_COLUMNS } from 'components/UsersTable/constants';

const UserTable = () => {
  return (
    <StyledTableWrapper>
      <StyledTable>
        <thead>
          <tr>
            {TABLE_COLUMNS.map((column) => (
              <StyledHeadCell key={column}>{column}</StyledHeadCell>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <StyledCell>{user.firstName}</StyledCell>
              <StyledCell>{user.lastName}</StyledCell>
              <StyledCell>{STATUS_TITLE[user.status]}</StyledCell>
              <StyledCell>{user.mail}</StyledCell>
              <StyledCell>{user.registrationDate}</StyledCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </StyledTableWrapper>
  );
};

export default UserTable;
