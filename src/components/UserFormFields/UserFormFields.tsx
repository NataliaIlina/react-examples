import React from 'react';

import type { IUserFormValues } from 'src/types';

import TextField from 'ui/TextField/TextField';

interface IProps {
  values: IUserFormValues;
  setValues: (values: IUserFormValues) => void;
}

const UserFormFields = ({ values, setValues }: IProps) => {
  return (
    <>
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
    </>
  );
};

export default UserFormFields;
