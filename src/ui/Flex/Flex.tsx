import React from 'react';

import type { BoxProps } from '@mui/material/Box';

import Box from 'ui/Box/Box';

const Flex = ({ children, ...props }: BoxProps) => (
  <Box display="flex" {...props}>
    {children}
  </Box>
);

export default Flex;
