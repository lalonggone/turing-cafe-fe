import React, {useState} from 'react';
import './Form.css';

const Form = () => {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [guests, setGuests] = useState('')

    const handleChange = (event, setState) => {
        event.preventDefault()
        setState(event.target.value)
    }
    const handleSubmit = (event, setState) => {
        event.preventDefault()
        console.log(name, date, time, guests)
    }
    return (
        <div className='form'>
            <input type='text' placeholder='Name' value={name} onChange={(event) => handleChange(event, setName)}/>
            <input type='text' placeholder='Date (mm/dd)' value={date} onChange={(event) => handleChange(event, setDate)}/>
            <input type='text' placeholder='Time' value={time} onChange={(event) => handleChange(event, setTime)}/>
            <input type='text' placeholder='Number of guests' value={guests} onChange={(event) => handleChange(event, setGuests)}/>
            <button onClick={(event) => handleSubmit(event)}>Make Reservation</button>
        </div>
    );
};

export default Form;