import { createSlice } from '@reduxjs/toolkit';

const initialState = false

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoader: (state, action) => (action.payload)
  }
});

export const { setLoader } = loaderSlice.actions;

export const selectLoader = (state) => state.loader

export default loaderSlice.reducer;
