import React from 'react';
import Card from '../Card/Card';
import './Reservations.css';

const Reservations = ({reservations, deleteReservation}) => {

    return (
        <div className='reservations'>
            {reservations.map(reservation => {
                return (
                    <Card
                        key={reservation.id}
                        id={reservation.id}
                        name={reservation.name}
                        date={reservation.date}
                        time={reservation.time}
                        number={reservation.number}
                        deleteReservation={deleteReservation}
                    />
                )
            })}
        </div>
    );
};

export default Reservations;