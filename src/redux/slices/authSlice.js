import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  userType: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      const { token, user_type, data } = action.payload;
      state.loading = false;
      state.token = token;
      state.userType = user_type;
      state.user = data[0];
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signOut: (state) => {
      state.user = null;
      state.token = null;
      state.userType = null;
    },
  },
});

// Export actions
export const { signInStart, signInSuccess, signInFailure, signOut } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
