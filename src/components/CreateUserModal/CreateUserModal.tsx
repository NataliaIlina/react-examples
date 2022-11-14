import React, { useState } from 'react';

import UserFormFields from 'components/UserFormFields/UserFormFields';

import Modal from 'ui/Modal/Modal';

interface IProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const CreateUserModal = ({ isModalOpen, closeModal }: IProps) => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const onFormSubmit = () => {
    console.log(values);
  };

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

export default CreateUserModal;
