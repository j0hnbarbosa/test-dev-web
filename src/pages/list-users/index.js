import React, { useState, useEffect } from 'react'
import WithNavBar from '../../components/with-navbar'
import { getContacts } from '../../services/get'

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Input,
  Flex,
  Spinner
} from '@chakra-ui/react';
import moment from 'moment';
import { cepMask, cpfMask } from '../../utils';
import Pagination from '../../components/pagination';

const ListContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [countContacts, setCountContacts] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleGetContacts = async (event, offset) => {
    setLoading(true);
    try {
      let search = ''
      if (event && event.target) {
        search = event.target.value;
      }

      const { contacts, count } = await getContacts({ search, offset });
      if (contacts) {
        setContacts(contacts);
        setCountContacts(count);
      }
    }
    catch (error) {
      console.log(error)
    }
    setLoading(false);
  }

  useEffect(() => {
    handleGetContacts();
  }, []);

  return (
    <>
      <Flex align='center'>
        <Input placeholder='Buscar usuario' onChange={handleGetContacts} maxWidth={300} />
        {loading && <Spinner marginLeft={2} />}
      </Flex>

      <TableContainer>
        <Table variant='striped'>
          <TableCaption>Usuários Cadastrados</TableCaption>
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Data Nascimento</Th>
              <Th>Email</Th>
              <Th>CPF</Th>
              <Th>CEP</Th>
              <Th>Rua</Th>
              <Th isNumeric>Número</Th>
              <Th>Bairro</Th>
              <Th>Cidade</Th>
              <Th>Estado</Th>
            </Tr>
          </Thead>
          <Tbody>
            {contacts && contacts.map((user) => (
              <Tr key={user.id}>
                <Td>{`${user.first_name} ${user.last_name}`}</Td>
                <Td>{user.birth_date && moment(user.birth_date).format('DD/MM/yyyy')}</Td>
                <Td>{user.email}</Td>
                <Td>{cpfMask(user.cpf)}</Td>
                <Td>{cepMask(user.cep)}</Td>
                <Td>{user.street}</Td>
                <Td>{user.number}</Td>
                <Td>{user.neighborhood}</Td>
                <Td>{user.city}</Td>
                <Td>{user.state}</Td>
              </Tr>
            ))}

          </Tbody>
        </Table>
      </TableContainer>

      <Flex justify='center' marginBottom='20px'>
        <Pagination
          onBack={handleGetContacts}
          onFoward={handleGetContacts}
          count={countContacts}
        />
      </Flex>
    </>
  )
}

export default WithNavBar(ListContacts);
