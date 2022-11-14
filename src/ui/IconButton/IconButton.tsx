import React from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MuiIconButton from '@mui/material/IconButton';

import type { IIconButtonProps } from 'ui/IconButton/types';

const iconComponent = {
  edit: <EditIcon />,
  delete: <DeleteIcon />,
};

const IconButton = ({ name, color = 'primary', ...props }: IIconButtonProps) => (
  <MuiIconButton color={color} {...props}>
    {iconComponent[name]}
  </MuiIconButton>
);

export default IconButton;
