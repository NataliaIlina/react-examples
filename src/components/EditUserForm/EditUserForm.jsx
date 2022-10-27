import React, { useState } from 'react';
import Modal from 'ui/Modal/Modal';
import TextField from 'ui/TextField/TextField';

const EditUserForm = ({ initialValues, isModalOpen, closeModal }) => {
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
  );
};

export default EditUserForm;
