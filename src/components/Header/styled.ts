import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

export const StyledNavigationList = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  list-style: none;
`;

export const StyledLink = styled(NavLink)`
  color: white;
  padding: 8px;
  text-decoration: none;

  &.active {
    text-decoration: underline;
  }
`;
