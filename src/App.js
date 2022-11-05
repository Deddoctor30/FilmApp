import React from 'react';
import AppSearch from './components/appSearch/AppSearch';
import AppActor from './components/appActor/AppActor';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; 
import './app.scss';

function App() {
  return (
    <Router>
      <main className='wrapper'>
        <div className="container">
          <Routes>
            <Route path='/' element={<AppSearch/>}/>
            <Route path='/actor' element={<AppActor/>}/>
          </Routes>
        </div>
      </main>
    </Router>

  );
}

export default App;
