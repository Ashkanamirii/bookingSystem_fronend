import { SET_IS_LOGIN } from "../../constants/types";
const initialState = {
  isLogin: localStorage.getItem("token") ? true : false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOGIN:
      return {
        ...state,
        isLogin: action.payload,
      };
    default:
      return state;
  }
};
export default loginReducer;
