import { createEntityAdapter, createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const searchAdapter = createEntityAdapter;

const initialState = {
   searchItems: [],
   searchStatus: 'idle',
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
   searchFetchingError
} = actions;