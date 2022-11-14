import React from 'react';

import MuiTextField, { TextFieldProps } from '@mui/material/TextField';

const TextField = ({
  variant = 'outlined',
  size = 'small',
  margin = 'normal',
  fullWidth = true,
  ...props
}: TextFieldProps) => {
  return (
    <MuiTextField fullWidth={fullWidth} variant={variant} size={size} margin={margin} {...props} />
  );
};

export default TextField;
