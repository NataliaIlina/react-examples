import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  padding: 8px 16px;
  margin: 0;
  outline: none;
  color: #ffffff;
  background-color: #1976d2;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid transparent;

  ${(props) =>
    props.variant === 'outlined' &&
    css`
      border: 1px solid #1976d2;
      background-color: transparent;
      color: #1976d2;
    `}
`;
