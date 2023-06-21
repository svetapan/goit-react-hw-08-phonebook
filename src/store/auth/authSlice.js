import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCurrentUser, getProfileThunk, loginThunk } from './loginThunk';
import { initialState } from 'store/initialState';

const handlePending = (state, { payload }) => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.token = payload.token;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilledProfile = (state, {payload}) => {
  state.isLoading = false;
  state.error = '';
  state.profile = payload;
}

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut(state) {
      state.profile = null;
      state.token = '';
    },
  },

  extraReducers: (builder) => {
    builder
    .addCase(loginThunk.fulfilled, handleFulfilled)
    .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
    .addCase(fetchCurrentUser.fulfilled, handleFulfilled)
    .addMatcher(isAnyOf(loginThunk.pending, getProfileThunk.pending), handlePending)
    .addMatcher(isAnyOf(loginThunk.rejected, getProfileThunk.rejected), handleRejected)
  },
});

export const authReducer = authSlice.reducer;
export const {logOut} = authSlice.actions;