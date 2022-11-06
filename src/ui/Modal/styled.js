import styled from '@emotion/styled';

export const StyledBackdrop = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  color: rgba(0, 0, 0, 0.87);
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 20%) 0 11px 15px -7px, rgb(0 0 0 / 14%) 0px 24px 38px 3px,
    rgb(0 0 0 / 12%) 0px 9px 46px 8px;
  z-index: 101;
  min-width: 400px;
  min-height: 250px;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

export const StyledModalHeader = styled.div`
  position: relative;
`;

export const StyledCloseIcon = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  padding: 0;
  cursor: pointer;
  position: absolute;
  top: -16px;
  right: -16px;
  background: none;
  border: none;
`;

export const StyledModalTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

export const StyledModalContent = styled.div`
  padding: 24px 0;
  flex-grow: 2;
`;

export const StyledModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;
