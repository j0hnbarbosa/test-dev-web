import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from '../pages/main';
import RegisterUser from '../pages/register-user';
import NotFound from './not-found';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Main />} />
        <Route path='/main' element={<Main />} />
        <Route path='/register-user' element={<RegisterUser />} />


        {/*Used to routes that not exist */}
        <Route path='/404' element={<NotFound />} />
        <Route path='*' element={<Navigate redirect to='/404' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;