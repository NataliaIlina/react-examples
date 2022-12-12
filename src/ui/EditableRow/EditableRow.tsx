import { ChangeEvent, useCallback, useState } from 'react';

import { TextFieldProps } from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { StyledLabel, StyledValueWrapper } from 'ui/EditableRow/styled';
import Flex from 'ui/Flex/Flex';
import IconButton from 'ui/IconButton/IconButton';
import TextField from 'ui/TextField/TextField';

interface IProps {
  label: string;
  value: string;
}

const EditableRow = ({ label, value }: IProps) => {
  const [isActive, setActive] = useState(false);
  const [fieldValue, setFieldValue] = useState(value);

  const onEditIconClick = useCallback(() => {
    setActive(true);
  }, []);

  const onCancelIconClick = useCallback(() => {
    setActive(false);
  }, []);

  const onSaveIconClick = useCallback(() => {
    setActive(false);
  }, []);

  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setFieldValue(e.target.value),
    []
  );

  return (
    <Flex alignItems="center" gap="8px">
      <StyledLabel>
        <Typography variant="h6">{label}</Typography>
      </StyledLabel>

      <StyledValueWrapper>
        {isActive ? (
          <TextField size="small" margin="none" value={fieldValue} onChange={onInputChange} />
        ) : (
          <Typography variant="body1">{value}</Typography>
        )}
      </StyledValueWrapper>

      <Flex width="80px" justifyContent="flex-end">
        {!isActive && <IconButton name="edit" onClick={onEditIconClick} />}
        {isActive && (
          <>
            <IconButton name="check" onClick={onSaveIconClick} />
            <IconButton name="close" onClick={onCancelIconClick} />
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default EditableRow;
