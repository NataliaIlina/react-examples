import React from 'react';

import MuiDialog from '@mui/material/Dialog';
import MuiDialogActions from '@mui/material/DialogActions';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogTitle from '@mui/material/DialogTitle';

import Button from 'ui/Button/Button';
import { IModalProps } from 'ui/Modal/types';

const Modal = ({
  open,
  onClose,
  title,
  children,
  acceptButtonTitle = 'Сохранить',
  onAccept,
}: IModalProps) => {
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
