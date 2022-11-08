import React, { useState } from 'react';
import Modal from 'ui/Modal/Modal';
import UserFormFields from 'components/UserFormFields/UserFormFields';

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
