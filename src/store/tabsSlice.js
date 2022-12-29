import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  "anal",
  "gay",
  "lesbian",
  "shemale",
  "step mom",
  "anal",
  "gay",
  "lesbian",
  "shemale",
  "step mom",
  "anal",
  "gay",
  "lesbian",
  "shemale",
  "step mom",
  "anal",
  "gay",
  "lesbian",
  "shemale",
  "step mom",
  "anal",
  "gay",
  "lesbian",
  "shemale",
  "step mom",
];

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
