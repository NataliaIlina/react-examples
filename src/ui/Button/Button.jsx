import React from 'react';
import { StyledButton } from 'src/ui/Button/styled';

const Button = ({ children, onClick, variant = 'contained' }) => (
  <StyledButton variant={variant} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;
