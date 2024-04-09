import './App.css'
import React from 'react'
import Reservations from '../Reservations/Reservations'
import Form from '../Form/Form'
import { useState } from 'react'

function App() {
  // need to GET reservations from the server
  // write logic to delete a reservation

  const dummyData = [
    {
      id: 1,
      name: 'Christie',
      date: '12/29',
      time: '7:00',
      number: 12,
    },
    {
      id: 2,
      name: 'Leta',
      date: '4/5',
      time: '7:00',
      number: 2,
    },
    {
      id: 3,
      name: 'Pam',
      date: '1/21',
      time: '6:00',
      number: 4,
    },
  ]

  const [reservations, setReservations] = useState(dummyData)

  const addReservation = (newReservation) => {
    setReservations([...reservations, newReservation])
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
