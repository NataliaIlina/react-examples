import React, { useState } from 'react';
import Button from 'ui/Button/Button';
import Modal from 'ui/Modal/Modal';
import TextField from 'ui/TextField/TextField';
import { StyledButtonWrapper } from 'components/CreateUserForm/styled';

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
    <StyledButtonWrapper>
      <Button onClick={openModal}>Добавить пользователя</Button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Добавление пользователя"
        onAccept={onFormSubmit}
      >
        <TextField
          label="Имя"
          id="firstName"
          value={values.firstName}
          onChange={(e) => {
            setValues({ ...values, firstName: e.target.value });
          }}
        />
        <TextField
          label="Фамилия"
          id="lastName"
          value={values.lastName}
          onChange={(e) => {
            setValues({ ...values, lastName: e.target.value });
          }}
        />
        <TextField
          label="E-mail"
          id="email"
          value={values.email}
          onChange={(e) => {
            setValues({ ...values, email: e.target.value });
          }}
        />
      </Modal>
    </StyledButtonWrapper>
  );
};

export default CreateUserForm;
