import React from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MuiIconButton from '@mui/material/IconButton';

const iconComponent = {
  edit: <EditIcon />,
  delete: <DeleteIcon />,
};

const IconButton = ({ name, color = 'primary', ...props }) => (
  <MuiIconButton color={color} {...props}>
    {iconComponent[name]}
  </MuiIconButton>
);

export default IconButton;
