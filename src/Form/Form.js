import React from 'react';
import './Form.css';

const Form = () => {

    return (
        <div className='form'>
            <input type='text' placeholder='Name' />
            <input type='text' placeholder='Date (mm/dd)' />
            <input type='text' placeholder='Time' />
            <input type='text' placeholder='Number of guests' />
            <button>Make Reservation</button>
        </div>
    );
};

export default Form;