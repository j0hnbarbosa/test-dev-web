import React from 'react';
import { Link } from 'react-router-dom';
import { Box, UnorderedList, ListItem, Flex } from '@chakra-ui/react';

function App() {
  return (
    <Flex>
      <Box padding={10}>
        Hello

        <UnorderedList>
          <ListItem><Link to='/main'>App</Link> </ListItem>
          <ListItem><Link to='/register-user'>Cadastrar Usuário</Link></ListItem>
        </UnorderedList>

      </Box>
    </Flex>
  );
}

export default App;
