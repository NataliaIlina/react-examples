import styled from 'styled-components';

export const StyledTableWrapper = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  width: 100%;
  overflow-x: auto;
  margin-bottom: 16px;
`;

export const StyledTable = styled.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  flex-direction: column;
  justify-content: center;
`;

export const StyledHeadCell = styled.th`
  padding: 16px;
  border-bottom: 1px solid #e7ebf0;
  text-align: left;
  font-weight: 600;
`;

export const StyledCell = styled.td`
  padding: 16px;
  border-bottom: 1px solid #e7ebf0;
  text-align: left;
`;

export const StyledEmptyResult = styled.div`
  padding: 24px;
  text-align: center;
`;
