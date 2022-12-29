import React, { useCallback, useMemo, useState } from 'react';

import { useDispatch } from 'src/hooks/redux';
import { createUser } from 'src/stores/users/slice';
import { IUser } from 'src/types';

import UserFormFields from 'components/UserFormFields/UserFormFields';

import Modal from 'ui/Modal/Modal';

interface IProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const CreateUserModal = ({ isModalOpen, closeModal }: IProps) => {
  const dispatch = useDispatch();

  const initialValues = useMemo<IUser>(() => {
    return {
      firstName: '',
      lastName: '',
      email: '',
      status: 'active',
      registrationDate: new Date().toLocaleDateString(),
      id: Math.random(),
    };
  }, []);

  const [values, setValues] = useState(initialValues);

  const resetForm = useCallback(() => {
    setValues(initialValues);
  }, [initialValues]);

  const onFormSubmit = useCallback(() => {
    dispatch(createUser(values));
    resetForm();
    closeModal();
  }, [closeModal, dispatch, resetForm, values]);

  const onClose = useCallback(() => {
    resetForm();
    closeModal();
  }, [closeModal, resetForm]);

  return (
    <Modal
      open={isModalOpen}
      onClose={onClose}
      title="Добавление пользователя"
      onAccept={onFormSubmit}
    >
      <UserFormFields setValues={setValues} values={values} />
    </Modal>
  );
};

export default CreateUserModal;
