import React from 'react';

export interface ITableProps {
  columns: string[];
  rows: { cells: { content: React.ReactNode }[]; onClick: () => void }[];
}
