import styled from 'styled-components';

export const StyledFilters = styled.div`
  margin-bottom: 16px;
`;

export const StyledFilterButton = styled.button`
  min-width: 60px;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;

  background-color: ${(props) => (props.isActive ? 'white' : '#e7ebf0')};
  color: ${(props) => (props.isActive ? '#1976d2' : 'rgba(0,0,0,0.87)')};
  box-shadow: ${(props) =>
    props.isActive
      ? '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)'
      : 'none'};
`;
