import React, { useState } from 'react';
import {
  StyledTableWrapper,
  StyledCell,
  StyledHeadCell,
  StyledTable,
  StyledEmptyResult,
} from './styled';
import { users } from './mock';
import { STATUS_TITLE } from 'src/constants';
import { TABLE_COLUMNS } from 'components/UsersTable/constants';
import TextField from 'src/ui/TextField/TextField';

const UserTable = () => {
  const [searchValue, setSearchValue] = useState('');

  const data = users.filter((user) => {
    const userName = `${user.firstName}${user.lastName}`.toLowerCase();
    if (userName.includes(searchValue.toLowerCase())) {
      return true;
    }

    return false;
  });

  return (
    <>
      <TextField
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        id="search"
        label="Поиск по имени"
      />
      <StyledTableWrapper>
        {data.length === 0 && <StyledEmptyResult>нет данных для отображения</StyledEmptyResult>}
        {data.length > 0 && (
          <StyledTable>
            <thead>
              <tr>
                {TABLE_COLUMNS.map((column) => (
                  <StyledHeadCell key={column}>{column}</StyledHeadCell>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
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
        )}
      </StyledTableWrapper>
    </>
  );
};

export default UserTable;
