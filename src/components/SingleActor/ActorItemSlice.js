import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   singleActorItem: [],
   singleActorStatus: 'loading',
   singleActorRequest: '',
};

const singleActorSlice = createSlice({
   name: 'singleActor', 
   initialState,
   reducers: {
      singleActorFetched: (state, action) => {
         state.singleActorItem = action.payload;
         state.singleActorStatus = 'idle';

      },
      singleActorDisFetched: (state) => {
         state.singleActorItem = [];
         state.singleActorStatus = 'loading';
      },
      singleActorFetchingError: state => {
         state.singleActorStatus = 'error';
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

const {actions, reducer} = singleActorSlice;

export default reducer;

export const {
   singleActorFetched,
   singleActorFetchingError,
   singleActorDisFetched,
} = actions;