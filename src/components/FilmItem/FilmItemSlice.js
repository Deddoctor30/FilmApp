import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ImdbService from '../../services/imdbService';

const initialState = {
   filmItem: [],
   filmStatus: 'loading',
   filmRequest: '',
};

export const fetchFilm = createAsyncThunk(
   'singleFilm/fetchFilm',
   async (id) => {
      const {getSearchMovieInfo} = ImdbService();
      return await getSearchMovieInfo(id)
   }
);

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
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchFilm.pending, (state) => {
            state.filmStatus = 'loading'
         })
         .addCase(fetchFilm.fulfilled, (state, action) => {
            state.filmItem = action.payload;
            state.filmStatus = 'idle';
         })
         .addCase(fetchFilm.rejected, (state) => {
            state.filmStatus = 'error';
         })
         .addDefaultCase(() => {})
   }
})

const {actions, reducer} = filmSlice;

export default reducer;

export const {
   filmFetched,
   filmFetchingError,
   filmDisFetched,
} = actions;