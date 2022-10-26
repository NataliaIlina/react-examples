import styled from 'styled-components';

export const StyledTextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-size: 14px;
`;

export const StyledTextField = styled.input`
  padding: 8px 0;
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  background: none;

  &:focus {
    border-bottom-color: #1976d2;
  }
`;
