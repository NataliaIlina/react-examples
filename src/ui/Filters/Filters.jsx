import { StyledFilterButton } from 'src/ui/Filters/styled';
import React from 'react';
import Box from 'ui/Box/Box';

const Filters = ({ value, onChange, options }) => {
  return (
    <Box mb="16px">
      {options.map((item) => (
        <StyledFilterButton
          key={item.label}
          isActive={value === item.value}
          onClick={() => onChange(item.value)}
        >
          {item.label}
        </StyledFilterButton>
      ))}
    </Box>
  );
};

export default Filters;
