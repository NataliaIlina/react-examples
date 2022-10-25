import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  font-family: 'Roboto', Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
  padding: 8px 16px;
  margin: 0;
  outline: none;
  color: #ffffff;
  background-color: #1976d2;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid #1976d2;

  ${(props) =>
    props.variant === 'outlined' &&
    css`
      background-color: transparent;
      color: #1976d2;
    `}
`;
