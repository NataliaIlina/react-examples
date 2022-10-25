import React from 'react';
import { StyledButton } from 'src/ui/styled';

const Button = ({ children, onClick, variant = 'contained' }) => (
  <StyledButton variant={variant} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;
