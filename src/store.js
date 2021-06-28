import { configureStore } from '@reduxjs/toolkit';
import loaderReducer from './features/loader/loaderSlice';

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
  },
});
