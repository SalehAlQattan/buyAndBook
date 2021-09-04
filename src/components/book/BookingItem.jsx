// react
import React, { useState } from 'react';

// stores
import bookingStore from '../../stores/bookingStore';

const BookingItem = () => {
  const today = new Date();

  const now =
    today.getFullYear() +
    '-' +
    ('0' + (today.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + today.getDate()).slice(-2);
  // booking state
  const [booking, setBooking] = useState(now);

  // hanleChange
  const handleChange = (event) => {
    setBooking(event.target.value);
  };

  const handleClick = () => {
    bookingStore.createBooking({ date: booking });
  };

  return (
    <div>
      <h2>Book Now</h2>
      <input type='date' name='date' value={booking} onChange={handleChange} />
      <button className='btn btn-primary' onClick={handleClick}>
        Book
      </button>
    </div>
  );
};

export default BookingItem;
