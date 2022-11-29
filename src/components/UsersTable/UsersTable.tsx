import React, { SyntheticEvent, useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { STATUS_TITLE } from 'src/constants/common';
import type { IUser, IUserStatus } from 'src/types';

import CreateUserModal from 'components/CreateUserModal/CreateUserModal';
import DeleteUserModal from 'components/DeleteUserModal/DeleteUserModal';
import EditUserModal from 'components/EditUserModal/EditUserModal';
import { FILTERS, TABLE_COLUMNS } from 'components/UsersTable/constants';

import Button from 'ui/Button/Button';
import Filters from 'ui/Filters/Filters';
import Flex from 'ui/Flex/Flex';
import IconButton from 'ui/IconButton/IconButton';
import Table from 'ui/Table/Table';
import TextField from 'ui/TextField/TextField';

import { users } from './mock';
import { StyledTableWrapper } from './styled';

const UserTable = () => {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState('');
  const [currentStatus, setCurrentStatus] = useState('all');
  const [currentUser, setCurrentUser] = useState(null);
  const [currentModal, setCurrentModal] = useState(null);

  const openCreateModal = useCallback(() => {
    setCurrentModal('create');
  }, []);

  const openEditModal = useCallback((user: IUser) => {
    setCurrentUser({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
    setCurrentModal('edit');
  }, []);

  const openDeleteModal = useCallback((user: IUser) => {
    setCurrentUser(user);
    setCurrentModal('delete');
  }, []);

  const closeModal = useCallback(() => {
    setCurrentUser(null);
    setCurrentModal(null);
  }, []);

  const onFilterChange = useCallback((e: SyntheticEvent, status: IUserStatus) => {
    setCurrentStatus(status);
  }, []);

  const data = useMemo(
    () =>
      users
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
        }),
    [currentStatus, searchValue]
  );

  const onRowClick = useCallback(
    (userId: number) => {
      navigate(`${userId}`);
    },
    [navigate]
  );

  const rows = useMemo(
    () =>
      data.map((user) => ({
        onClick: () => onRowClick(user.id),
        cells: [
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
        ],
      })),
    [data, onRowClick, openDeleteModal, openEditModal]
  );

  return (
    <>
      <TextField
        value={searchValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
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
