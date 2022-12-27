import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    authenticate: (state, action) => (state = action.payload),
  },
});

export const { authenticate } = authSlice.actions;

export default authSlice.reducer;
