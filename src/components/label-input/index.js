import React from 'react'
import { Input, Box, Text } from '@chakra-ui/react';

const LabelInput = ({ title = '', type='text', onChange, value }) => {
  return (
    <Box minWidth={350} maxWidth={800}>
      <Text fontWeight={'medium'} color='gray.400' >{title}</Text>
      <Input value={value} type={type} onChange={onChange} size='md' />
    </Box>
  )
}

export default LabelInput