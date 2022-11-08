import React, { useState } from 'react';
import { StyledTableWrapper } from './styled';
import { users } from './mock';
import { STATUS_TITLE } from 'src/constants/common';
import { FILTERS, TABLE_COLUMNS } from 'components/UsersTable/constants';
import TextField from 'src/ui/TextField/TextField';
import Filters from 'ui/Filters/Filters';
import CreateUserModal from 'components/CreateUserModal/CreateUserModal';
import EditUserModal from 'components/EditUserModal/EditUserModal';
import Table from 'ui/Table/Table';
import IconButton from 'ui/IconButton/IconButton';
import DeleteUserModal from 'components/DeleteUserModal/DeleteUserModal';
import Flex from 'ui/Flex/Flex';
import Button from 'ui/Button/Button';

const UserTable = () => {
  const [searchValue, setSearchValue] = useState('');
  const [currentStatus, setCurrentStatus] = useState('all');
  const [currentUser, setCurrentUser] = useState(null);
  const [currentModal, setCurrentModal] = useState(null);

  const openCreateModal = () => {
    setCurrentModal('create');
  };

  const openEditModal = (user) => {
    setCurrentUser({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
    setCurrentModal('edit');
  };

  const openDeleteModal = (user) => {
    setCurrentUser(user);
    setCurrentModal('delete');
  };

  const closeModal = () => {
    setCurrentUser(null);
    setCurrentModal(null);
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
        <IconButton
          onClick={() => {
            openEditModal(user);
          }}
          name="edit"
        />
      ),
    },
    {
      content: (
        <IconButton
          onClick={() => {
            openDeleteModal(user);
          }}
          name="delete"
        />
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

      <Flex justifyContent="center">
        <Button onClick={openCreateModal}>Добавить пользователя</Button>
      </Flex>

      <CreateUserModal closeModal={closeModal} isModalOpen={currentModal === 'create'} />

      {currentUser && (
        <EditUserModal
          initialValues={currentUser}
          closeModal={closeModal}
          isModalOpen={currentModal === 'edit'}
        />
      )}

      {currentUser && (
        <DeleteUserModal
          user={currentUser}
          closeModal={closeModal}
          isModalOpen={currentModal === 'delete'}
        />
      )}
    </>
  );
};

export default UserTable;
