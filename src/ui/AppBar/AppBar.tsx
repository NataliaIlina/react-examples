import MuiAppBar from '@mui/material/AppBar';
import MuiToolbar from '@mui/material/Toolbar';

import type { IAppBarProps } from 'ui/AppBar/types';

const AppBar = ({ children, ...props }: IAppBarProps) => (
  <MuiAppBar {...props}>
    <MuiToolbar>{children}</MuiToolbar>
  </MuiAppBar>
);

export default AppBar;
