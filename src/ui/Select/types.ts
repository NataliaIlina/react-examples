import type { SelectChangeEvent, SelectProps } from '@mui/material/Select';

export interface ISelectProps extends SelectProps {
  options: { value: string; label: string }[];
}

export type ISelectChangeEvent = SelectChangeEvent;
