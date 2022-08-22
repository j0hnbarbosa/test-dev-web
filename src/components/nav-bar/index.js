import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Box,
  Text
} from '@chakra-ui/react'

import { ROUTE_NAME } from '../../routes/constat-routes-name';
import { sign_out } from '../../actions/auth-action';

const NavBar = () => {
  const [selectedRoute, setSelectedRoute] = useState('/');
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname !== selectedRoute) {
      setSelectedRoute(pathname);
    }
  }, [pathname, selectedRoute]);

  const handleSignOut = () => {
    dispatch(sign_out());
    navigate(ROUTE_NAME.LOGIN);
  };

  return (
    <Box bg="gray.200" width='auto' paddingLeft={10} paddingY='10px'>
      <Flex justify={'space-between'}>
        <Breadcrumb>
          <BreadcrumbItem >
            <BreadcrumbLink as={Link} to={ROUTE_NAME.ROOT}>
              <Text fontWeight='bold' color={selectedRoute === ROUTE_NAME.ROOT ? 'gray.900' : 'gray.600'} fontSize='20'>
                Home
              </Text>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem >
            <BreadcrumbLink as={Link} to={ROUTE_NAME.REGISTER_CONTACT}>
              <Text fontWeight='bold' color={selectedRoute === ROUTE_NAME.REGISTER_CONTACT ? 'gray.900' : 'gray.600'} fontSize='20'>Cadastrar Usuário</Text></BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to={ROUTE_NAME.LIST_CONTACTS}>
              <Text fontWeight='bold' color={selectedRoute === ROUTE_NAME.LIST_CONTACTS ? 'gray.900' : 'gray.600'} fontSize='20'>Lista de usuários</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Breadcrumb>
          <BreadcrumbItem onClick={handleSignOut}>
            <BreadcrumbLink>
              <Text fontWeight='bold' color={selectedRoute === ROUTE_NAME.LOGIN ? 'gray.900' : 'gray.600'} fontSize='20' paddingRight='10'>
                LOGOUT
              </Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
    </Box >
  )
}

export default NavBar