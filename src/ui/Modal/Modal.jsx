import React from 'react';
import Button from 'src/ui/Button/Button';
import MuiDialog from '@mui/material/Dialog';
import MuiDialogActions from '@mui/material/DialogActions';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogTitle from '@mui/material/DialogTitle';

const Modal = ({ isOpen, onClose, title, children, acceptButtonTitle = 'Сохранить', onAccept }) => {
  return (
    <MuiDialog open={isOpen} onClose={onClose}>
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
