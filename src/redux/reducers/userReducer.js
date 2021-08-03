import { USER_INFORMATION } from "../../constants/types";

const userReducer = (state = [], action) => {
  switch (action.type) {
    case USER_INFORMATION:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
