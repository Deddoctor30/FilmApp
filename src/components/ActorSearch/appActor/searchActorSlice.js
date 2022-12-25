import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";


const initialState = {
   actorItems: [],
   actorStatus: 'idle',
   // actorShowAll: false,
   actorRequest: '',
};

const actorSlice = createSlice({
   name: 'actor', 
   initialState,
   reducers: {
      actorFetching: state => { state.actorStatus = 'loading' },
      actorFetched: (state, action) => {
         state.actorStatus = 'idle';
         state.actorItems = action.payload;

      },
      // actorShow: state => {
      //    state.actorShowAll = !state.actorShowAll;
      // },
      actorFetchingError: state => {
         state.actorStatus = 'error';
      },
      actorSetRequest: (state, action) => {
         state.actorRequest = action.payload;
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

const {actions, reducer} = actorSlice;

export default reducer;

export const {
   actorFetching,
   actorFetched,
   actorShow,
   actorFetchingError,
   actorSetRequest,
} = actions;