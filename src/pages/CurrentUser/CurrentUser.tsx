import React, { useCallback, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { SelectChangeEvent, Stack } from '@mui/material';
import Box from '@mui/material/Box';

import { STATUS_OPTIONS } from 'src/constants/common';
import { users } from 'src/mock';
import { IUserStatus } from 'src/types';

import EditableRow from 'ui/EditableRow/EditableRow';
import Select from 'ui/Select/Select';
import Typography from 'ui/Typography/Typography';

const CurrentUser = () => {
  const { userId } = useParams();

  const user = useMemo(() => {
    return users.find((item) => item.id === Number(userId));
  }, [userId]);

  const [status, setStatus] = useState(user?.status);

  const onSelectChange = useCallback((e: SelectChangeEvent) => {
    setStatus(e.target.value as IUserStatus);
  }, []);

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

        <Box width="500px">
          <Select
            label="Статус"
            id="status"
            options={STATUS_OPTIONS}
            value={status}
            onChange={onSelectChange}
          />
        </Box>
      </Stack>
    </div>
  );
};

export default CurrentUser;
