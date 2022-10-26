import React from 'react';
import {
  StyledModal,
  StyledModalContent,
  StyledModalTitle,
  StyledBackdrop,
  StyledModalActions,
  StyledModalHeader,
  StyledCloseIcon,
} from 'src/ui/Modal/styled';
import Button from 'src/ui/Button/Button';

const Modal = ({ isOpen, onClose, title, children, acceptButtonTitle = 'Сохранить', onAccept }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <StyledBackdrop onClick={onClose} />
      <StyledModal onClick={(e) => e.stopPropagation()}>
        <StyledModalHeader>
          <StyledModalTitle>{title}</StyledModalTitle>
          <StyledCloseIcon onClick={onClose}>х</StyledCloseIcon>
        </StyledModalHeader>

        <StyledModalContent>{children}</StyledModalContent>
        <StyledModalActions>
          <Button variant="outlined" onClick={onClose}>
            Отменить
          </Button>
          <Button onClick={onAccept}>{acceptButtonTitle}</Button>
        </StyledModalActions>
      </StyledModal>
    </>
  );
};

export default Modal;
