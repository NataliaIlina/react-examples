import React from 'react';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

const Filters = ({ value, onChange, options, ...props }) => {
  return (
    <Tabs value={value} onChange={(e, newValue) => onChange(newValue)} {...props}>
      {options.map((item) => (
        <Tab key={item.label} label={item.label} value={item.value} />
      ))}
    </Tabs>
  );
};

export default Filters;
