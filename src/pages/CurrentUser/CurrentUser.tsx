import React from 'react';
import { Link, useParams } from 'react-router-dom';

import Typography from 'ui/Typography/Typography';

const CurrentUser = () => {
  const { userId } = useParams();

  console.log(userId);
  return (
    <div>
      <Typography>{`Текущий пользователь c id ${userId}`}</Typography>

      <Link to="/users">Назад</Link>
    </div>
  );
};

export default CurrentUser;
