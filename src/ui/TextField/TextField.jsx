import React from 'react';
import { StyledTextField, StyledTextFieldWrapper } from './styled';

const TextField = ({ label = '', value, onChange, id }) => {
  return (
    <StyledTextFieldWrapper>
      <label htmlFor={id}>{label}</label>
      <StyledTextField id={id} value={value} onChange={onChange} />
    </StyledTextFieldWrapper>
  );
};

export default TextField;
