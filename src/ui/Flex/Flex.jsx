import Box from 'ui/Box/Box';
import React from 'react';

const Flex = ({ children, ...props }) => (
  <Box display="flex" {...props}>
    {children}
  </Box>
);

export default Flex;
