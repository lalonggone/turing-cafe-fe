import './App.css'
import React from 'react'
import Reservations from '../Reservations/Reservations'
import Form from '../Form/Form'
import { useState, useEffect } from 'react'

function App() {


  const [reservations, setReservations] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/reservations')
      .then((response) => response.json())
      .then((data) => setReservations(data))
  }, [])

  const addReservation = (newReservation) => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReservation),
    })
      .then((response) => response.json())
      .then((data) => setReservations([...reservations, data]))
  }

  const deleteReservation = (id) => {
    const filteredReservations = reservations.filter(
      (reservation) => reservation.id !== id
    )
    setReservations(filteredReservations)
  }

  return (
    <div className="App">
      <h1 className="app-title">Turing Cafe Reservations</h1>
      <Form addReservation={addReservation} />
      <Reservations
        reservations={reservations}
        deleteReservation={deleteReservation}
      />
    </div>
  )
}

export default App
