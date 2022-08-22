import React from 'react';
import { Link } from 'react-router-dom';
import { Box, UnorderedList, ListItem, Flex } from '@chakra-ui/react';
import WithNavBar from '../../components/with-navbar';
import { ROUTE_NAME } from '../../routes/constat-routes-name';

function App() {
  return (
    <Flex>
      <Box>
        Hello

        <UnorderedList>
          <ListItem><Link to={ROUTE_NAME.REGISTER_CONTACT}>Cadastrar Contato</Link></ListItem>
          <ListItem><Link to={ROUTE_NAME.LIST_CONTACTS}>Listar Contatos</Link></ListItem>
        </UnorderedList>

      </Box>
    </Flex>
  )
}

export default WithNavBar(App);
