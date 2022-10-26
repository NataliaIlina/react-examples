import { StyledFilterButton, StyledFilters } from 'src/ui/Filters/styled';
import React from 'react';

const Filters = ({ value, onChange, options }) => {
  return (
    <StyledFilters>
      {options.map((item) => (
        <StyledFilterButton
          key={item.label}
          isActive={value === item.value}
          onClick={() => onChange(item.value)}
        >
          {item.label}
        </StyledFilterButton>
      ))}
    </StyledFilters>
  );
};

export default Filters;
