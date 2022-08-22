import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from '../pages/main';
import ListUsers from '../pages/list-users';
import RegisterUser from '../pages/register-user';
import NotFound from './not-found';
import Login from '../pages/login';
import { ROUTE_NAME } from './constat-routes-name';

import PrivateRoute from './private-route-component';

function RoutesApp() {
  const isAuthenticated = localStorage.getItem('TOKEN');

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path={ROUTE_NAME.ROOT} exact element={<PrivateRoute component={Main}  />} />
          <Route path={ROUTE_NAME.MAIN} element={<PrivateRoute component={Main}  />} />
          <Route path={ROUTE_NAME.REGISTER_CONTACT} element={<PrivateRoute component={RegisterUser}  />} />
          <Route path={ROUTE_NAME.LIST_CONTACTS} element={<PrivateRoute component={ListUsers}  />} />


          {!isAuthenticated && <Route path={ROUTE_NAME.LOGIN} element={<Login />} />}

          {/*Used to routes that not exist */}
          <Route path={ROUTE_NAME[404]} element={<PrivateRoute component={NotFound} />} />
          <Route path='*' element={<Navigate redirect to={ROUTE_NAME[404]} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RoutesApp;