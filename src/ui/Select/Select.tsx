import MuiFormControl from '@mui/material/FormControl';
import MuiInputLabel from '@mui/material/InputLabel';
import MuiMenuItem from '@mui/material/MenuItem';
import MuiSelect from '@mui/material/Select';

import { ISelectProps } from 'ui/Select/types';

const Select = ({ label = '', id, options, value, onChange }: ISelectProps) => {
  return (
    <MuiFormControl fullWidth>
      <MuiInputLabel id={`${id}-label`}>{label}</MuiInputLabel>
      <MuiSelect
        size="small"
        labelId={`${id}-label`}
        id={id}
        value={value}
        label={label}
        onChange={onChange}
      >
        {options.map((option) => (
          <MuiMenuItem value={option.value} key={option.value}>
            {option.label}
          </MuiMenuItem>
        ))}
      </MuiSelect>
    </MuiFormControl>
  );
};

export default Select;
