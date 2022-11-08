import React, { useState } from 'react';
import Modal from 'ui/Modal/Modal';
import Typography from 'ui/Typography/Typography';

const DeleteUserModal = ({ user, isModalOpen, closeModal }) => {
  const onFormSubmit = () => {
    console.log(user.id);
  };

  return (
    <Modal
      isOpen={isModalOpen}
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
