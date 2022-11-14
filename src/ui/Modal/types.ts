import { DialogProps } from '@mui/material/Dialog';

export interface IModalProps extends DialogProps {
  acceptButtonTitle?: string;
  onAccept: () => void;
  onClose: () => void;
}
