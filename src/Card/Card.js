import React from 'react';
import './Card.css';

const Card = () => {
    return (
        <div className="card">
            <h1 className='name'>Christie</h1>
            <p className='date'>12/29</p>
            <p className='time'>7:00</p>
            <p className='number'>Number of guests: 12</p>
            <button>Cancel</button>
        </div>
    );
};

export default Card;