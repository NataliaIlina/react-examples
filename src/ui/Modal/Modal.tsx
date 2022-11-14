import React from 'react';

import MuiDialog, { DialogProps } from '@mui/material/Dialog';
import MuiDialogActions from '@mui/material/DialogActions';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogTitle from '@mui/material/DialogTitle';

import Button from 'src/ui/Button/Button';

interface IProps extends DialogProps {
  acceptButtonTitle?: string;
  onAccept: () => void;
}

const Modal = ({
  open,
  onClose,
  title,
  children,
  acceptButtonTitle = 'Сохранить',
  onAccept,
}: IProps) => {
  return (
    <MuiDialog open={open} onClose={onClose}>
      <MuiDialogTitle>{title}</MuiDialogTitle>

      <MuiDialogContent>{children}</MuiDialogContent>
      <MuiDialogActions>
        <Button variant="outlined" onClick={onClose}>
          Отменить
        </Button>
        <Button onClick={onAccept}>{acceptButtonTitle}</Button>
      </MuiDialogActions>
    </MuiDialog>
  );
};

export default Modal;
