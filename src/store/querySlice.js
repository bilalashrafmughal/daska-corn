import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "all",
  per_page: 30,
  page: 1,
  thumbsize: "medium",
  order: "latest",
  gay: 0,
  lq: 1,
  format: "json",
};

export const querySlice = createSlice({
  initialState: initialState,
  name: "query",
  reducers: {
    search: (state, action) => (state.query = action.payload),
    loadMore: (state) => (state.per_page += 10),
    nextPage: (state) => (state.page += 1),
    prevPage: (state) => (state.page -= 1),
    setThumbsize: (state, action) => (state.thumbsize = action.payload),
    // we can use these properties for thumbnail sizes
    // 1."small" thumbnail size 190x152
    // 2."medium" thumbnail size 427x240
    // 3."big" thumbnail size 640x360
    setOrder: (state, action) => (state.order = action.payload),
    // "latest" newest videos first
    // "longest" longest videos first
    // "shortest" shortest videos first
    // "top-rated" top rated videos first
    // "most-popular" most popular all time videos first
    // "top-weekly" most popular this week videos first
    // "top-monthly" most popular this month videos first
    changeQuality: (state, action) => (state.lq = action.payload),
    // "0" gay content not included
    // "1" gay content included
    // "2" only gay content
  },
});

export const {
  search,
  loadMore,
  nextPage,
  prevPage,
  setThumbsize,
  setOrder,
  changeQuality,
} = querySlice.actions;

export default querySlice.reducer;
