import React, { useState } from 'react';
import { StyledTableWrapper, StyledIcon } from './styled';
import { users } from './mock';
import { STATUS_TITLE } from 'src/constants/common';
import { FILTERS, TABLE_COLUMNS } from 'components/UsersTable/constants';
import TextField from 'src/ui/TextField/TextField';
import Filters from 'ui/Filters/Filters';
import CreateUserForm from 'components/CreateUserForm/CreateUserForm';
import EditIcon from 'ui/icons/Edit';
import EditUserForm from 'components/EditUserForm/EditUserForm';
import Table from 'ui/Table/Table';

const UserTable = () => {
  const [searchValue, setSearchValue] = useState('');
  const [currentStatus, setCurrentStatus] = useState('all');
  const [currentUser, setCurrentUser] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const openEditModal = (user) => {
    setCurrentUser({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setCurrentUser(null);
    setEditModalOpen(false);
  };

  const onFilterChange = (status) => {
    setCurrentStatus(status);
  };

  const data = users
    .filter((user) => {
      const userName = `${user.firstName}${user.lastName}`.toLowerCase();
      if (userName.includes(searchValue.toLowerCase())) {
        return true;
      }

      return false;
    })
    .filter((user) => {
      if (currentStatus === 'all') {
        return true;
      }

      return user.status === currentStatus;
    });

  const rows = data.map((user) => [
    { content: user.firstName },
    { content: user.lastName },
    { content: STATUS_TITLE[user.status] },
    { content: user.email },
    { content: user.registrationDate },
    {
      content: (
        <StyledIcon
          onClick={() => {
            openEditModal(user);
          }}
        >
          <EditIcon />
        </StyledIcon>
      ),
    },
  ]);

  return (
    <>
      <TextField
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        id="search"
        label="Поиск по имени"
        fullWidth={false}
      />

      <Filters
        value={currentStatus}
        onChange={onFilterChange}
        options={FILTERS}
        sx={{ mb: '16px' }}
      />

      <StyledTableWrapper>
        <Table rows={rows} columns={TABLE_COLUMNS} />
      </StyledTableWrapper>

      <CreateUserForm />
      {currentUser && (
        <EditUserForm
          initialValues={currentUser}
          closeModal={closeEditModal}
          isModalOpen={isEditModalOpen}
        />
      )}
    </>
  );
};

export default UserTable;
