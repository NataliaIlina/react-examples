import React, { useState } from 'react';
import Button from 'ui/Button/Button';
import Modal from 'ui/Modal/Modal';
import Flex from 'ui/Flex/Flex';
import UserFormFields from 'components/UserFormFields/UserFormFields';

const CreateUserForm = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const onFormSubmit = () => {
    console.log(values);
  };

  return (
    <Flex justifyContent="center">
      <Button onClick={openModal}>Добавить пользователя</Button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Добавление пользователя"
        onAccept={onFormSubmit}
      >
        <UserFormFields setValues={setValues} values={values} />
      </Modal>
    </Flex>
  );
};

export default CreateUserForm;
