import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { fetchCurrentUser} from 'store/auth/loginThunk';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PablicRoute from './PublicRoute/PublicRoute';
import HomePage from 'pages/HomePage';
import LogInPage from 'pages/LogInPage';
import RegisterPage from 'pages/RegisterPage';
import ContactsPage from 'pages/ContactsPage';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage /> } />
        <Route path='/login' element={<PablicRoute><LogInPage /></PablicRoute>} />
        <Route path='/register' element={<PablicRoute><RegisterPage /></PablicRoute>} />
        <Route path="/contacts" element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
      </Route>
    </Routes>
  )
}
