import './App.css';
import React from 'react';
import Reservations from '../Reservations/Reservations';
import Form from '../Form/Form';

function App() {
  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <Form />
      <Reservations />
    </div>
  );
}

export default App; 