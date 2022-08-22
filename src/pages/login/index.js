import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sign_in } from '../../actions/auth-action';
import { useNavigate } from 'react-router-dom';

import Card from '../../components/card'
import { Formik, Form, Field } from 'formik';
import {
  Box,
  Flex,
  Input,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
} from '@chakra-ui/react';
import { postAuthentication } from '../../services/post';
import Message from '../../components/message';
import { loginValidation } from '../../utils/validations';
import { ROUTE_NAME } from '../../routes/constat-routes-name';


const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = async (data) => {
    setLoading(true);

    try {
      const resut = await postAuthentication(data);
      if (resut.data) {
        dispatch(sign_in(resut.data.token));
        navigate(ROUTE_NAME.ROOT);
      } else {
        console.log(resut);
      }
    } catch (err) {
      console.log(err);
      setError(err);
    }

    setLoading(false);
  }

  return (
    <Flex justify={'center'} paddingTop='80px' height='100vh' bg='gray.100'>
      <Box>
        <Card minWidth={['360px', '380px', '380px']} padding={10}>
          <Flex justify='center'>
            <Text fontWeight={'bold'} fontSize='24px' marginBottom={5}>Login</Text>
          </Flex>

          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => {
              handleLogin(values);
            }}
            validationSchema={loginValidation}
          >
            {(props) => (
              <Form>
                <Field name='email'>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.email && form.touched.email} isRequired>
                      <FormLabel>E-mail</FormLabel>
                      <Input {...field} placeholder='Email' name='email' />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>

                  )}
                </Field>
                <Field name='password'>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.password && form.touched.password} isRequired>
                      <FormLabel>Password</FormLabel>
                      <Input {...field} placeholder='password' name='password' type={'password'} />
                      <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                {error && (
                  <Message
                    text={error}
                    defaultText="Email ou password invalido"
                  />
                )}

                <Flex justify='center'>
                  <Button
                    mt={4}
                    colorScheme='blue'
                    isLoading={loading}
                    type='submit'
                  >
                    Entrar
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </Card>
      </Box>
    </Flex>
  )

}

export default Login