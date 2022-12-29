import React, { useCallback, useState } from 'react';

import { useDispatch } from 'src/hooks/redux';
import { updateUser } from 'src/stores/users/slice';
import { IUser } from 'src/types';

import UserFormFields from 'components/UserFormFields/UserFormFields';

import Modal from 'ui/Modal/Modal';

interface IProps {
  initialValues: IUser;
  isModalOpen: boolean;
  closeModal: () => void;
}

const EditUserModal = ({ initialValues, isModalOpen, closeModal }: IProps) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialValues);

  const onFormSubmit = useCallback(() => {
    dispatch(updateUser(values));
    closeModal();
  }, [closeModal, dispatch, values]);

  return (
    <Modal
      open={isModalOpen}
      onClose={closeModal}
      title="Добавление пользователя"
      onAccept={onFormSubmit}
    >
      <UserFormFields setValues={setValues} values={values} />
    </Modal>
  );
};

export default EditUserModal;
