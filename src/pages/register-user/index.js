import React, { useState, useEffect, useMemo } from 'react'
import { Stack, Flex, Button, Text, Divider } from '@chakra-ui/react'
import LabelInput from '../../components/label-input'
import {
  postRegisterUser
} from '../../services/post';
import { getCepData } from '../../services/get';
import { listStates } from './list-states';
import LabelSelect from '../../components/label-select';
import withNavBar from '../../components/with-navbar';
import { cpfMask, onlyNumbers } from '../../utils';
import Card from '../../components/card';
import Message from '../../components/message';


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

  const isValidateFields = () => {
    if (!onlyNumbers(cpf) || onlyNumbers(cpf).length !== 11) {
      setError({ message: 'CPF invalido verifique o cpf' });
    } else if (!email.trim() || !email.trim().includes('@')) {
      setError({ message: 'Email deve ser preenchido e ter @' });
    } else {
      setError(null);
      return true;
    }
    return false;
  }

  const handleRegisterUser = async () => {
    setError(null);
    setLoading(true);

    const data = {
      first_name,
      last_name,
      cpf: onlyNumbers(cpf),
      email: email.trim().toLowerCase(),
      birth_date,
      address: {
        cep: onlyNumbers(cep),
        street,
        number,
        neighborhood,
        city,
        state,
      }
    };

    try {
      if (isValidateFields()) {
        const resu = await postRegisterUser(data);
        if (!resu.error) {
          setSuccess(true);
          handleClearInputs();
        } else {
          setError(resu);
        }
      }
    } catch (erro) {
      console.log(erro);
      setError(erro);
    }

    setLoading(false);
  }

  const handleCepConsult = async () => {
    if (cep.length > 6) {
      setLoading(true);
      const cepNumbers = onlyNumbers(cep);
      const { data } = await getCepData(onlyNumbers(cepNumbers));

      if (!data.erro) {
        setNeighborhood(data.bairro);
        setCep(data.cep);
        setCity(data.localidade);
        setStreet(data.logradouro);

        const stateSelect = listStates.find((item) => item.uf === data.uf);
        if (stateSelect) {
          setState(stateSelect.name)
        }
      }
      setLoading(false);
    }
  }

  const options = useMemo(() => (
    listStates.map((item) => ({
      key: item.uf,
      value: item.uf,
      name: item.name,
    }))
  ), []);

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    }
  }, [success]);

  return (
    <>
      <Card>
        <Flex justify={'center'}>
          <Flex direction='column'>
            <Stack spacing={3}>
              <Text fontWeight={'bold'}>Dados Pessoais</Text>
              <LabelInput value={first_name} title='Primeiro Nome' onChange={({ target }) => setFirstName(target.value)} />
              <LabelInput value={last_name} title='Sobrenome Nome' onChange={({ target }) => setLastName(target.value)} />
              <LabelInput value={cpf} title='CPF' onChange={({ target }) => setCpf(cpfMask(target.value))} />
              <LabelInput value={email} type='email' title='Email' onChange={({ target }) => setEmail(target.value)} />
              <LabelInput value={birth_date} type="date" title='Data Nascimento' onChange={({ target }) => setBirthDate(target.value)} />
            </Stack>

            <Divider marginTop={10} marginBottom={10} />

            <Stack spacing={3}>
              <Text fontWeight={'bold'}>Endereço</Text>
              <LabelInput value={cep} maxLength='9' loading={loading} title='CEP' onBlur={handleCepConsult} onChange={({ target }) => setCep(target.value)} />
              <LabelInput value={street} title='Rua' onChange={({ target }) => setStreet(target.value)} />
              <LabelInput value={number} type='number' title='Número' onChange={({ target }) => setNumber(target.value)} />
              <LabelInput value={neighborhood} title='Bairro' onChange={({ target }) => setNeighborhood(target.value)} />
              <LabelInput value={city} title='Cidade' onChange={({ target }) => setCity(target.value)} />

              <LabelSelect
                title='Estado'
                options={options}
                onChange={setState}
                value={state}
              />

            </Stack>

            {error && (<Message
              text={error.message}
              defaultText={'Erro ao Salvar dados do Usuário'}
            />)}

            {success && (<Message
              text='Dados do usuário Salvo com sucesso!'
              success
            />)}

            <Flex justify={'center'} marginTop={20} marginBottom={20} >
              <Button minW={150} isLoading={loading} onClick={handleRegisterUser} color={'blue.400'}>Salvar</Button>
            </Flex>

          </Flex>
        </Flex>
      </Card>
    </>
  )
}

export default withNavBar(RegisterUser);