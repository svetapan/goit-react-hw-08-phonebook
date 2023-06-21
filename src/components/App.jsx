import { useDispatch} from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { useSelector } from 'react-redux';
import { fetchCurrentUser } from 'store/auth/loginThunk';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PablicRoute from './PublicRoute/PublicRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const LogInPage = lazy(() => import('pages/LogInPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

export default function App() {
  const {token} = useSelector((state) => state.user)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
       <Route path='/' element={<Layout />}>
        <Route index element={<Suspense fallback={<div>Loading...</div>}><HomePage /></Suspense>} />
         <Route path='/login' element={<Suspense fallback={<div>Loading...</div>}><PablicRoute><LogInPage /></PablicRoute></Suspense>} />
         <Route path='/register' element={<Suspense fallback={<div>Loading...</div>}><PablicRoute><RegisterPage /></PablicRoute></Suspense>} />
        {token && (
          <Route path="/contacts" element={<Suspense fallback={<div>Loading...</div>}><PrivateRoute><ContactsPage /></PrivateRoute></Suspense>} />
        )}
      </Route>
    </Routes>
  )
}
