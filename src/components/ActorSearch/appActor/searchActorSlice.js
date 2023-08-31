import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   actorItems: [],
   actorStatus: 'idle',
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
      actorFetchingError: state => {
         state.actorStatus = 'error';
      },
      actorSetRequest: (state, action) => {
         state.actorRequest = action.payload;
      }
   }
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