import React from 'react';
import MuiIconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
