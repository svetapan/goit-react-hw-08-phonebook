import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  fetchContacts,
  addContacts,
  deleteContact,
  updateContact,
} from 'store/fetchContacts';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContacts.pending]: handlePending,
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContacts.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
    [updateContact.pending]: handlePending,
    [updateContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
    },
    [updateContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
export default contactsReducer;
