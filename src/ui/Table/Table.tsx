import React from 'react';

import MuiTable from '@mui/material/Table';
import MuiTableBody from '@mui/material/TableBody';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableContainer from '@mui/material/TableContainer';
import MuiTableHead from '@mui/material/TableHead';
import MuiTableRow from '@mui/material/TableRow';

import Box from 'ui/Box/Box';
import type { ITableProps } from 'ui/Table/types';

const Table = ({ rows, columns }: ITableProps) => {
  return (
    <MuiTableContainer>
      {rows.length === 0 && (
        <Box p="24px" textAlign="center">
          нет данных для отображения
        </Box>
      )}
      {rows.length > 0 && (
        <MuiTable>
          <MuiTableHead>
            <MuiTableRow>
              {columns.map((column, index) => (
                <MuiTableCell key={index}>{column}</MuiTableCell>
              ))}
            </MuiTableRow>
          </MuiTableHead>
          <MuiTableBody>
            {rows.map((row, index) => (
              <MuiTableRow hover={Boolean(row.onClick)} onClick={row.onClick} key={index}>
                {row.cells.map((item, index) => (
                  <MuiTableCell key={index}>{item.content}</MuiTableCell>
                ))}
              </MuiTableRow>
            ))}
          </MuiTableBody>
        </MuiTable>
      )}
    </MuiTableContainer>
  );
};

export default Table;
