import React, { useState } from 'react';

import UserFormFields from 'components/UserFormFields/UserFormFields';

import Modal from 'ui/Modal/Modal';

const EditUserModal = ({ initialValues, isModalOpen, closeModal }) => {
  const [values, setValues] = useState(initialValues);

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

export default EditUserModal;
