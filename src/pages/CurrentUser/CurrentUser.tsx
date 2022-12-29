import React, { useCallback, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { STATUS_OPTIONS, STATUS_TITLE } from 'src/constants/common';
import { useDispatch, useSelector } from 'src/hooks/redux';
import { getUserById } from 'src/stores/users/getters';
import { updateUser } from 'src/stores/users/slice';
import type { IUser, IUserStatus } from 'src/types';

import EditableRow from 'ui/EditableRow/EditableRow';
import Select from 'ui/Select/Select';
import type { ISelectChangeEvent } from 'ui/Select/types';
import Stack from 'ui/Stack/Stack';
import TextField from 'ui/TextField/TextField';
import Typography from 'ui/Typography/Typography';

const CurrentUser = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const user = useSelector((state) => getUserById(state, Number(userId)));

  const [userValues, setUserValues] = useState(user);

  const onSelectChange = useCallback(
    (e: ISelectChangeEvent) => {
      setUserValues({ ...userValues, status: e.target.value as IUserStatus });
    },
    [userValues]
  );

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: keyof IUser) => {
      setUserValues({ ...userValues, [name]: e.target.value });
    },
    [userValues]
  );

  const onSave = useCallback(() => {
    dispatch(updateUser(userValues));
  }, [dispatch, userValues]);

  const onCancel = useCallback(
    (name: keyof IUser) => {
      setUserValues({ ...userValues, [name]: user[name] });
    },
    [user, userValues]
  );

  return (
    <div>
      <Link to="/users">Назад</Link>

      <Typography variant="h6" mb="16px">
        Текущий пользователь:
      </Typography>

      <Stack gap="8px">
        <EditableRow
          label="Фамилия"
          value={user.lastName}
          onSave={onSave}
          onCancel={() => onCancel('lastName')}
        >
          <TextField
            size="small"
            margin="none"
            value={userValues.lastName}
            onChange={(e) => onChange(e, 'lastName')}
            autoFocus
          />
        </EditableRow>
        <EditableRow
          label="Имя"
          value={user.firstName}
          onSave={onSave}
          onCancel={() => onCancel('firstName')}
        >
          <TextField
            size="small"
            margin="none"
            value={userValues.firstName}
            onChange={(e) => onChange(e, 'firstName')}
            autoFocus
          />
        </EditableRow>
        <EditableRow
          label="Почта"
          value={user.email}
          onSave={onSave}
          onCancel={() => onCancel('email')}
        >
          <TextField
            size="small"
            margin="none"
            value={userValues.email}
            onChange={(e) => onChange(e, 'email')}
            autoFocus
          />
        </EditableRow>

        <EditableRow
          label="Статус"
          value={STATUS_TITLE[user.status]}
          onSave={onSave}
          onCancel={() => onCancel('status')}
        >
          <Select
            id="status"
            options={STATUS_OPTIONS}
            value={userValues.status}
            onChange={onSelectChange}
          />
        </EditableRow>
      </Stack>
    </div>
  );
};

export default CurrentUser;
