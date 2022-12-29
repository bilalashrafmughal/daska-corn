import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  searchBar: "",
  per_page: 30,
  page: 1,
  thumbsize: undefined,
  order: undefined,
  gay: undefined,
  lq: undefined,
  format: undefined,
};

export const querySlice = createSlice({
  initialState: initialState,
  name: "query",
  reducers: {
    search: (state, action) => {
      state.query = action.payload;
      state.searchBar = action.payload;
    },
    searchByTab: (state, action) => {
      state.query = action.payload;
      state.searchBar = "";
    },
    loadMore: (state) => {
      state.per_page += 10;
      return state;
    },
    // nextPage: (state) => {
    //   state.page += 1;
    //   return state;
    // },
    // prevPage: (state) => {
    //   state.page -= 1;
    //   return state;
    // },
    setPage: (state, action) => {
      state.page = action.payload;
      return state;
    },
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
    resetQuery: (state) => {
      state = { ...state, ...initialState };
      return state;
    },
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
  setPage,
  resetQuery,
  searchByTab,
} = querySlice.actions;

export default querySlice.reducer;
