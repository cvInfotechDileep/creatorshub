import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counterSlice';
import themeReducer from '../slices/themeSlice';
import authReducer from '../slices/authSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    auth: authReducer,
  },
});

export default store;
