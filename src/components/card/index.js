import React from 'react'
import { Box } from '@chakra-ui/react';

const Card = ({ children, ...props }) => {
  return (
    <Box boxShadow='0 4px 8px 0 rgba(0,0,0,0.2)' borderRadius='2px' bg={'white'} paddingTop='5' {...props}>
      {children}
    </Box>
  )
}

export default Card