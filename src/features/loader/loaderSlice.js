import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  laoder: false
}

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setLoader: (state, action) => ({
      loader: action.payload
    })
  }
});

export const { setLoader } = loaderSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectLoader = (state) => state.loader;

export default loaderSlice.reducer;
