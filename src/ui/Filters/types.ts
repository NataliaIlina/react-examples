import type { TabsProps } from '@mui/material/Tabs';

export interface IFiltersProps extends TabsProps {
  options: { label: string; value: string }[];
  value: string;
}
