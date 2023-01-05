import { configureStore } from '@reduxjs/toolkit';
import search from '../components/FilmSearch/appSearch/searchFilmSlice';
import actor from '../components/ActorSearch/appActor/searchActorSlice';
import film from '../components/FilmItem/FilmItemSlice';
import singleActor from '../components/ActorItem/ActorItemSlice';

export const store = configureStore({
  reducer: {
    search,
    actor,
    film,
    singleActor,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
