import React from 'react';

import type { IUser } from 'src/types';

import Modal from 'ui/Modal/Modal';
import Typography from 'ui/Typography/Typography';

interface IProps {
  isModalOpen: boolean;
  closeModal: () => void;
  user: IUser;
}

const DeleteUserModal = ({ user, isModalOpen, closeModal }: IProps) => {
  const onFormSubmit = () => {
    console.log(user.id);
  };

  return (
    <Modal
      open={isModalOpen}
      onClose={closeModal}
      title="Удаление пользователя"
      onAccept={onFormSubmit}
    >
      <Typography>
        {`Вы действительно хотети удалить пользователя ${user.firstName} ${user.lastName}?`}
      </Typography>
    </Modal>
  );
};

export default DeleteUserModal;
