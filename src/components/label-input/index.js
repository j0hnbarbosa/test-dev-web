import React from 'react'
import { Input, Box, Text, Spinner, Flex } from '@chakra-ui/react';

const LabelInput = ({
  title = '',
  type = 'text',
  onChange,
  value,
  onBlur = () => {},
  maxLength = '100',
  loading
}) => {
  return (
    <Box minWidth={350} maxWidth={800}>
      <Text fontWeight={'medium'} color='gray.400' >{title}</Text>
      <Flex align='center'>
        <Input value={value} maxLength={maxLength} type={type} onChange={onChange} size='md' onBlur={onBlur} />
        {loading && <Spinner marginLeft={2}/>}
      </Flex>
    </Box>
  )
}

export default LabelInput