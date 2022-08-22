import React from 'react'
import { Navigate } from 'react-router-dom';

import {ROUTE_NAME} from '../constat-routes-name';

const PrivateRoute = ({ component: Component }) => {
  const isAuthenticated = localStorage.getItem('TOKEN');

  if (isAuthenticated) {
    return <Component />
  }

  return <Navigate to={ROUTE_NAME.LOGIN} replace />;
}

export default PrivateRoute