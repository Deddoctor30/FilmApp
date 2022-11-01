import React from 'react';
import AppSearch from './components/appSearch/AppSearch';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './app.scss';

function App() {
  return (
    <main className='wrapper'>
      <div className="container">
        <AppSearch/>
      </div>
    </main>
  );
}

export default App;
