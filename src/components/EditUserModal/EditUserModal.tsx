import React, { useCallback, useState } from 'react';

import { IUserFormValues } from 'src/types';

import UserFormFields from 'components/UserFormFields/UserFormFields';

import Modal from 'ui/Modal/Modal';

interface IProps {
  initialValues: IUserFormValues;
  isModalOpen: boolean;
  closeModal: () => void;
}

const EditUserModal = ({ initialValues, isModalOpen, closeModal }: IProps) => {
  const [values, setValues] = useState(initialValues);

  const onFormSubmit = useCallback(() => {
    console.log(values);
  }, [values]);

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
