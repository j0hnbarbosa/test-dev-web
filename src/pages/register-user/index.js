import React, { useState, useEffect } from 'react'
import { Stack, Flex, Button, Text, Divider } from '@chakra-ui/react'
import LabelInput from '../../components/label-input'
import {
  postRegisterUser
} from '../../services/post';


const RegisterUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [birth_date, setBirthDate] = useState('');


  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const handleClearInputs = () => {
    setFirstName('');
    setLastName('');
    setCpf('');
    setEmail('');
    setBirthDate('');
    setCep('');
    setStreet('');
    setNumber('');
    setNeighborhood('');
    setCity('');
    setState('');
  };

  const handleRegisterUser = async () => {
    setError(null);

    const data = {
      first_name,
      last_name,
      cpf,
      email,
      birth_date,
      address: {
        cep,
        street,
        number,
        neighborhood,
        city,
        state,
      }
    };

    setLoading(true);
    try {
      await postRegisterUser(data);
      setSuccess(true);
      handleClearInputs();
    } catch (erro) {
      console.log(erro);
      setError(erro);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    }
  }, [success]);

  return (
    <Flex justify={'center'}>
      <Flex marginTop={50} direction='column'>
        <Stack spacing={3}>
          <Text fontWeight={'bold'}>Dados Pessoais</Text>
          <LabelInput value={first_name} title='Primeiro Nome' onChange={({ target }) => setFirstName(target.value)} />
          <LabelInput value={last_name} title='Ultimo Nome' onChange={({ target }) => setLastName(target.value)} />
          <LabelInput value={cpf} title='CPF' onChange={({ target }) => setCpf(target.value)} />
          <LabelInput value={email} type='email' title='Email' onChange={({ target }) => setEmail(target.value)} />
          <LabelInput value={birth_date} type="date" title='Data Nascimento' onChange={({ target }) => setBirthDate(target.value)} />
        </Stack>

        <Divider marginTop={10} marginBottom={10} />

        <Stack spacing={3}>
          <Text fontWeight={'bold'}>Endereço</Text>
          <LabelInput value={cep} title='CEP' onChange={({ target }) => setCep(target.value)} />
          <LabelInput value={street} title='Rua' onChange={({ target }) => setStreet(target.value)} />
          <LabelInput value={number} type='number' title='Número' onChange={({ target }) => setNumber(target.value)} />
          <LabelInput value={neighborhood} title='Bairro' onChange={({ target }) => setNeighborhood(target.value)} />
          <LabelInput value={city} title='Cidade' onChange={({ target }) => setCity(target.value)} />
          <LabelInput value={state} title='Estado' onChange={({ target }) => setState(target.value)} />
        </Stack>

        {error && (<Flex justify={'center'} marginTop={20} >
          <Text color='red.400'>Erro ao Salvar dados do Usuário</Text>
        </Flex>)}

        {success && (<Flex justify={'center'} marginTop={20} >
          <Text color='green.400'>Dados do usuário Salvo com sucesso!</Text>
        </Flex>)}

        <Flex justify={'center'} marginTop={20} marginBottom={20} >
          <Button isLoading={loading} onClick={handleRegisterUser} color={'blue.400'}>Salvar</Button>
        </Flex>

      </Flex>
    </Flex>
  )
}

export default RegisterUser