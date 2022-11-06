import React from 'react';
import MuiTextField from '@mui/material/TextField';

const TextField = ({
  variant = 'outlined',
  size = 'small',
  margin = 'normal',
  fullWidth = true,
  ...props
}) => {
  return (
    <MuiTextField fullWidth={fullWidth} variant={variant} size={size} margin={margin} {...props} />
  );
};

export default TextField;
