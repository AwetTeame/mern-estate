import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  err: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.err = null;
    },
    signInFailer: (state, action) => {
      state.err = action.payload;
      state.loading = false;
    },
    default: () => intialState,
  },
});

export const { signInStart, signInSuccess, signInFailer } = userSlice.actions;
export default userSlice.reducer;
