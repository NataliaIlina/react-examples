import React from 'react';
import { Link } from 'react-router-dom';

import Typography from 'ui/Typography/Typography';

const CurrentUser = () => (
  <div>
    <Typography>Главная страница</Typography>

    <Link to="/users">Перейти к странице пользователей</Link>
  </div>
);

export default CurrentUser;
