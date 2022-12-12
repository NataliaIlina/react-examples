import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Stack } from '@mui/material';

import { users } from 'src/mock';

import EditableRow from 'ui/EditableRow/EditableRow';
import Typography from 'ui/Typography/Typography';

const CurrentUser = () => {
  const { userId } = useParams();

  const user = useMemo(() => {
    return users.find((item) => item.id === Number(userId));
  }, [userId]);

  return (
    <div>
      <Link to="/users">Назад</Link>

      <Typography variant="h6" mb="16px">
        Текущий пользователь:
      </Typography>

      <Stack gap="8px">
        <EditableRow label="Фамилия" value={user.lastName} />
        <EditableRow label="Имя" value={user.firstName} />
        <EditableRow label="Почта" value={user.email} />
      </Stack>
    </div>
  );
};

export default CurrentUser;
