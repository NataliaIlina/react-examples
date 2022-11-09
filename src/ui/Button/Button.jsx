import React from 'react';

import MuiButton from '@mui/material/Button';

const Button = ({ children, variant = 'contained', ...props }) => (
  <MuiButton variant={variant} {...props}>
    {children}
  </MuiButton>
);

export default Button;
