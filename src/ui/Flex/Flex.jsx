import React from 'react';

import Box from 'ui/Box/Box';

const Flex = ({ children, ...props }) => (
  <Box display="flex" {...props}>
    {children}
  </Box>
);

export default Flex;
