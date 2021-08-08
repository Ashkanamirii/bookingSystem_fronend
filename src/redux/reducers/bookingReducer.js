import { SET_BOOKING } from "../../constants/types";
const initialState = {
  isBooking: false,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKING:
      return {
        ...state,
        isBooking: action.payload,
      };
    default:
      return state;
  }
};
export default bookingReducer;