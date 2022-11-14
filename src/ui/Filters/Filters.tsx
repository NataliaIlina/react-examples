import React from 'react';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { IFiltersProps } from 'ui/Filters/types';

const Filters = ({ value, onChange, options, ...props }: IFiltersProps) => {
  return (
    <Tabs value={value} onChange={onChange} {...props}>
      {options.map((item) => (
        <Tab key={item.label} label={item.label} value={item.value} />
      ))}
    </Tabs>
  );
};

export default Filters;
