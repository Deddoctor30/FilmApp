import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ImdbService from '../../services/imdbService';

const initialState = {
   filmItem: [],
   filmStatus: 'loading',
   filmRequest: '',
};

export const fetchFilm = createAsyncThunk(             //AsyncThunk для асинхронных запросов (работа с API вынес в него)
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
      filmDisFetched: (state) => {
         state.filmItem = [];
         state.filmStatus = 'loading';
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchFilm.pending, (state) => {      // pending - загрузка, fulfield - загрузилось, reject...
            state.filmStatus = 'loading'
         })
         .addCase(fetchFilm.fulfilled, (state, action) => {
            state.filmItem = action.payload;
            state.filmStatus = 'idle';
         })
         .addCase(fetchFilm.rejected, (state) => {
            state.filmStatus = 'error';
         })
         .addDefaultCase(() => {})              // дефолтная функция
   }
})

const {actions, reducer} = filmSlice;

export default reducer;

export const {
   filmFetched,
   filmFetchingError,
   filmDisFetched,
} = actions;