import React from 'react';
import { Link } from 'react-router-dom';
import Countdown from './components/Countdown';
import Ghost from './components/Ghost';
import './App.css';

function App() {
  return (
    <>
      <h1>Frontend Halloween</h1>
      <Countdown />
      <Ghost />
      <Link to="/trick-or-treat">Trick or Treat</Link>
    </>
  );
}

export default App;