import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import userReducer from "./userReducer";
import bookingReducer from "./bookingReducer";
export default combineReducers({
  loginReducer,
  userReducer,
  bookingReducer,
});
