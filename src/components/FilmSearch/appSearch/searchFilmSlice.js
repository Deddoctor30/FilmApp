import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   searchItems: [],
   searchStatus: 'idle',
   searchShowAll: false,
   searchRequest: '',
};

const searchSlice = createSlice({
   name: 'search', 
   initialState,
   reducers: {
      searchFetching: state => { state.searchStatus = 'loading' },
      searchFetched: (state, action) => {
         state.searchItems = action.payload;
         state.searchStatus = 'idle';
      },
      searchShow: state => {
         state.searchShowAll = !state.searchShowAll;
      },
      searchFetchingError: state => {
         state.searchStatus = 'error';
      },
      searchSetRequest: (state, action) => {
         state.searchRequest = action.payload;
      }
   }
})
const {actions, reducer} = searchSlice;
export default reducer;
export const {
   searchFetching,
   searchFetched,
   searchShow,
   searchFetchingError,
   searchSetRequest,
} = actions;