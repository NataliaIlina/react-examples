import React from 'react';

import MuiButton from '@mui/material/Button';

import type { IButtonProps } from 'ui/Button/types';

const Button = ({ children, variant = 'contained', ...props }: IButtonProps) => (
  <MuiButton variant={variant} {...props}>
    {children}
  </MuiButton>
);

export default Button;
