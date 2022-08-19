import React from 'react'
import { Flex, Text, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Flex justify='center'>
      <Box margin={50}>
        <Text fontSize={24} color='red.400' fontWeight='bold'>
          Page Not Found
        </Text>

        <Link to='/'>
          <Text color='blue.400' marginTop={10}>
            Ir para página principal
          </Text>
        </Link>
      </Box>
    </Flex>
  )
}

export default NotFound