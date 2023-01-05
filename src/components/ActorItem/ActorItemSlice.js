import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ImdbService from '../../services/imdbService';


const initialState = {
   singleActorItem: [],
   singleActorStatus: 'loading',
   singleActorRequest: '',
};

export const fetchActor = createAsyncThunk(             //AsyncThunk для асинхронных запросов (работа с API вынес в него)
   'singleActor/fetchActor',
   async (id) => {
      const {getSearchActorInfo} = ImdbService();
      return await getSearchActorInfo(id)
   }
);

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
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchActor.pending, (state) => {      // pending - загрузка, fulfield - загрузилось, reject...
            state.singleActorStatus = 'loading'
         })
         .addCase(fetchActor.fulfilled, (state, action) => {
            state.singleActorItem = action.payload;
            state.singleActorStatus = 'idle';
         })
         .addCase(fetchActor.rejected, (state) => {
            state.singleActorStatus = 'error';
         })
         .addDefaultCase(() => {})              // дефолтная функция
   }
})

const {actions, reducer} = singleActorSlice;

export default reducer;

export const {
   singleActorFetched,
   singleActorFetchingError,
   singleActorDisFetched,
} = actions;