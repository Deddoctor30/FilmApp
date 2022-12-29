import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   filmItem: [],
   filmStatus: 'loading',
   filmRequest: '',
};

const filmSlice = createSlice({
   name: 'film', 
   initialState,
   reducers: {
      filmFetched: (state, action) => {
         state.filmItem = action.payload;
         state.filmStatus = 'idle';

      },
      filmDisFetched: (state) => {
         state.filmItem = [];
         state.filmStatus = 'loading';
      },
      filmFetchingError: state => {
         state.filmStatus = 'error';
      },
   },
   // extraReducers: (builder) => {
   //    builder
   //       .addCase(fetchFilters.fulfilled, (state, action) => {
   //          // state.filters = action.payload;
   //          filtersAdapter.setAll(state, action.payload);
   //       })
   // }
})

const {actions, reducer} = filmSlice;

export default reducer;

export const {
   filmFetched,
   filmFetchingError,
   filmDisFetched,
} = actions;