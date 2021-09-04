// library
import { makeAutoObservable } from 'mobx';
import instance from './instance';

class BookingStore {
  booking = null;
  constructor() {
    makeAutoObservable(this);
  }

  // create booking
  createBooking = async (newBooking) => {
    try {
      const response = await instance.post('/booking', newBooking);
      console.log(response);
      //
      this.booking.push(response.data.date);
      //
    } catch (error) {
      //
      console.error('Error in Creating New Booking', error);
    }
  };
}

const bookingStore = new BookingStore();

export default bookingStore;
