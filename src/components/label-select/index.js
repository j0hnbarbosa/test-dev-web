import React from 'react';
import { Select, Box, Text } from '@chakra-ui/react';

const LabelSelect = ({
  title = '',
  onChange,
  options = [],
  value,
}) => {
  console.log(value)
  return (
    <Box minWidth={350} maxWidth={800}>
      <Text fontWeight={'medium'} color='gray.400' >{title}</Text>
      <Select onChange={(event) => {onChange(event.target.value)}} _hover={{ cursor: 'pointer' }} value={value} >
        {options.map((item) => (
          <option key={item.key} value={item.name}>{item.name}</option>
        ))}
      </Select>
    </Box>
  )
}

export default LabelSelect