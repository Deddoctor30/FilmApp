import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";


const initialState = {
   searchItems: [],
   searchStatus: 'idle',
   searchShowAll: false,
};

const searchSlice = createSlice({
   name: 'search', 
   initialState,
   reducers: {
      searchFetching: state => { state.searchStatus = 'loading' },
      searchFetched: (state, action) => {
         state.searchStatus = 'idle';
         state.searchItems = action.payload;

      },
      searchShowAll: state => {
         state.searchShowAll = !state.searchShowAll;
      },
      searchFetchingError: state => {
         state.searchStatus = 'error';
      }
   },
   // extraReducers: (builder) => {
   //    builder
   //       .addCase(fetchFilters.fulfilled, (state, action) => {
   //          // state.filters = action.payload;
   //          filtersAdapter.setAll(state, action.payload);
   //       })
   // }
})

const {actions, reducer} = searchSlice;

export default reducer;

export const {
   searchFetching,
   searchFetched,
   searchShowAll,
   searchFetchingError
} = actions;