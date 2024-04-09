import React, { useState } from 'react'
import './Form.css'

const Form = ({ addReservation }) => {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [guests, setGuests] = useState('')

  const handleSubmit = (event, setState) => {
    event.preventDefault()
    console.log(name, date, time, guests)
    const newReservation = {
      id: Date.now(),
      name: name,
      date: date,
      time: time,
      number: guests,
    }
    addReservation(newReservation)
    setName('')
    setDate('')
    setTime('')
    setGuests('')
  }

  return (
    <form>
      <input
        className="name-input"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        className="date-input"
        type="text"
        placeholder="Date (mm/dd)"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <input
        className="time-input"
        type="text"
        placeholder="Time"
        value={time}
        onChange={(event) => setTime(event.target.value)}
      />
      <input
        className="guests-input"
        type="text"
        placeholder="Number of guests"
        value={guests}
        onChange={(event) => setGuests(event.target.value)}
      />
      <button onClick={(event) => handleSubmit(event)}>Make Reservation</button>
    </form>
  )
}

export default Form
