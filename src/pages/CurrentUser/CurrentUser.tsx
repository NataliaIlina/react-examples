import React, { useCallback, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Stack } from '@mui/material';

import { STATUS_OPTIONS, STATUS_TITLE } from 'src/constants/common';
import { users } from 'src/mock';
import { IUserStatus } from 'src/types';

import EditableRow from 'ui/EditableRow/EditableRow';
import Select from 'ui/Select/Select';
import { ISelectChangeEvent } from 'ui/Select/types';
import TextField from 'ui/TextField/TextField';
import Typography from 'ui/Typography/Typography';

const CurrentUser = () => {
  const { userId } = useParams();

  const user = useMemo(() => {
    return users.find((item) => item.id === Number(userId));
  }, [userId]);

  const [userValues, setUserValues] = useState(user);

  const onSelectChange = useCallback(
    (e: ISelectChangeEvent) => {
      setUserValues({ ...userValues, status: e.target.value as IUserStatus });
    },
    [userValues]
  );

  const onChange = useCallback(
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserValues({ ...userValues, [name]: e.target.value });
    },
    [userValues]
  );

  return (
    <div>
      <Link to="/users">Назад</Link>

      <Typography variant="h6" mb="16px">
        Текущий пользователь:
      </Typography>

      <Stack gap="8px">
        <EditableRow label="Фамилия" value={user.lastName}>
          <TextField
            size="small"
            margin="none"
            value={userValues.firstName}
            onChange={onChange('firstName')}
          />
        </EditableRow>
        <EditableRow label="Имя" value={user.firstName}>
          <TextField
            size="small"
            margin="none"
            value={userValues.lastName}
            onChange={onChange('lastName')}
          />
        </EditableRow>
        <EditableRow label="Почта" value={user.email}>
          <TextField
            size="small"
            margin="none"
            value={userValues.email}
            onChange={onChange('email')}
          />
        </EditableRow>

        <EditableRow label="Статус" value={STATUS_TITLE[user.status]}>
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
