import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const tabsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    updateTabs: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { updateTabs } = tabsSlice.actions;

export default tabsSlice.reducer;
