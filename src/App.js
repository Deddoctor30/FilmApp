import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; 
import { lazy, Suspense } from "react";
import './styles/_global.scss';
import './app.scss';

const AppSearch = lazy(() => import('./components/FilmSearch/appSearch/AppSearch'));
const AppActor = lazy(() => import('./components/ActorSearch/appActor/AppActor'));
const FilmItem = lazy(() => import('./components/FilmItem/FilmItem'));
const ActorItem = lazy(() => import('./components/ActorItem/ActorItem'))

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
