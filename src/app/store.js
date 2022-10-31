import { configureStore } from '@reduxjs/toolkit';
import search from '../components/appSearch/searchSlice';

export const store = configureStore({
  reducer: {
    search,
  },
});
