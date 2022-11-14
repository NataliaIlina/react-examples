import React from 'react';

export interface ITableProps {
  columns: string[];
  rows: { content: React.ReactNode }[][];
}
