import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; 
import { lazy, Suspense } from "react";
import './app.scss';


const SingleActor = lazy(() => import('./components/SingleActor/SingleActor'));
const AppSearch = lazy(() => import('./components/FilmSearch/appSearch/AppSearch'));                 // Ленивая загрузка
const AppActor = lazy(() => import('./components/ActorSearch/appActor/AppActor'));
// const SingleFilm = lazy(() => import('./components/SingleFilm/SingleFilm'));

function App() {
  return (
    <Router>
      <main className='wrapper'>
        <div className="container">
          <Suspense>
            <Routes>
              <Route path='/' element={<AppSearch/>}/>
              <Route path='/actor' element={<AppActor/>}/>
              {/* <Route path='/film/:id' element={<SingleFilm/>}/> */}
              <Route path='/actor/:id' element={<SingleActor/>}/>
            </Routes>
          </Suspense>
        </div>
      </main>
    </Router>
  );
}

export default App;
