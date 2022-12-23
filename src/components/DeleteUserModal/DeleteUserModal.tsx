import React, { useCallback } from 'react';

import { useDispatch } from 'src/hooks/redux';
import { deleteUser } from 'src/stores/users/slice';
import type { IUser } from 'src/types';

import Modal from 'ui/Modal/Modal';
import Typography from 'ui/Typography/Typography';

interface IProps {
  isModalOpen: boolean;
  closeModal: () => void;
  user: IUser;
}

const DeleteUserModal = ({ user, isModalOpen, closeModal }: IProps) => {
  const dispatch = useDispatch();

  const onFormSubmit = useCallback(() => {
    dispatch(deleteUser({ userId: user.id }));
    closeModal();
  }, [closeModal, dispatch, user.id]);

  return (
    <Modal
      open={isModalOpen}
      onClose={closeModal}
      title="Удаление пользователя"
      onAccept={onFormSubmit}
      acceptButtonTitle="удалить"
    >
      <Typography>
        {`Вы действительно хотите удалить пользователя ${user.firstName} ${user.lastName}?`}
      </Typography>
    </Modal>
  );
};

export default DeleteUserModal;
