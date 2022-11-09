import React, { useState } from 'react';

import UserFormFields from 'components/UserFormFields/UserFormFields';

import Modal from 'ui/Modal/Modal';

const CreateUserModal = ({ isModalOpen, closeModal }) => {
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
      isOpen={isModalOpen}
      onClose={closeModal}
      title="Добавление пользователя"
      onAccept={onFormSubmit}
    >
      <UserFormFields setValues={setValues} values={values} />
    </Modal>
  );
};

export default CreateUserModal;
