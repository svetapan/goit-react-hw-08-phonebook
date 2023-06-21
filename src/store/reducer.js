import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import contactsReducer from './reducerContacts';
import filterReducer from './filterSlice';

const authPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

const reducer = combineReducers({
  user: persistReducer(authPersistConfig, authReducer),
  contacts: contactsReducer,
  filter: filterReducer,
});

export default reducer;
