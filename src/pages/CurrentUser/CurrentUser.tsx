import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';

import { users } from 'src/mock';

import Typography from 'ui/Typography/Typography';

const CurrentUser = () => {
  const { userId } = useParams();
  const user = useMemo(() => {
    return users.find((item) => item.id === Number(userId));
  }, [userId]);

  return (
    <div>
      <Link to="/users">Назад</Link>

      <Typography>{`Текущий пользователь c id ${userId}`}</Typography>
    </div>
  );
};

export default CurrentUser;
