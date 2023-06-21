export const initialState = {
  user: {
    profile: null,
    token: '',
    isLoading: false,
    error: '',
  },
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};
