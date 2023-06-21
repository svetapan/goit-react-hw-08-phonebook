import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { getProfile, loginUser } from 'services/authService';

export const loginThunk = createAsyncThunk('users/login', async user => {
  return await loginUser(user);
});

export const getProfileThunk = createAsyncThunk('users/current', async () => {
  return await getProfile();
});

export const fetchCurrentUser = createAsyncThunk(
  'users/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { token } = useSelector(state => state.user.token);
    const persistedToken = state.user.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {}
  }
);

const operations = {
  loginThunk,
  getProfileThunk,
  fetchCurrentUser,
};
export default operations;
