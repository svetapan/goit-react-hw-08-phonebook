import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = (token) => {
  instance.defaults.headers.common['Authorization'] = token;
};

export const deleteToken = () => {
  delete instance.defaults.headers.common['Authorization'];
};

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.user.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }

  setToken(persistedToken);

  try {
    const response = await instance.get('/contacts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContacts = createAsyncThunk('contacts/addContact', async ({ name, number }, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.user.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }

  setToken(persistedToken);

  try {
    const response = await instance.post('/contacts', { name, number });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.user.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }

  setToken(persistedToken);

  try {
    const response = await instance.delete(`/contacts/${contactId}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateContact = createAsyncThunk('contacts/updateContact', async ({ contactId, name, number }, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.user.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }

  setToken(persistedToken);

  try {
    const response = await instance.patch(`/contacts/${contactId}`, {
      name,
      number,
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});