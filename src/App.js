import React from 'react';
// import AppSearch from './components/FilmSearch/appSearch/AppSearch';
// import AppActor from './components/ActorSearch/appActor/AppActor';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; 
import { lazy, Suspense } from "react";
// import FilmItem from './components/SingleFilm/FilmItem';
// import FilmItem from './components/FilmSearch/appFilm/FilmItem';
import './app.scss';
import Skeleton from './components/skeleton/Skeleton';
import ActorItem from './components/SingleActor/ActorItem';

const AppSearch = lazy(() => import('./components/FilmSearch/appSearch/AppSearch'));                 // Ленивая загрузка
const AppActor = lazy(() => import('./components/ActorSearch/appActor/AppActor'));
const FilmItem = lazy(() => import('./components/SingleFilm/FilmItem'));

function App() {
  return (
    <Router>
      <main className='wrapper'>
        <div className="container">
          <Suspense>
            <Routes>
              <Route path='/' element={<AppSearch/>}/>
              <Route path='/actor' element={<AppActor/>}/>
              <Route path='/film/:id' element={<FilmItem/>}/>
              <Route path='/actor/:id' element={<ActorItem/>}/>
            </Routes>
          </Suspense>
        </div>
      </main>
    </Router>
  );
}

export default App;
