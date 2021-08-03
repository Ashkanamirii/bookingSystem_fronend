import {SET_BOOKING} from '../../constants/types';

export const setBooking =(isBooking)=>({
    type:SET_BOOKING,
    payload:isBooking
})