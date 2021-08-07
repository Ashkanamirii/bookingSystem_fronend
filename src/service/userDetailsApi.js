import api from "./endpoint";
import { setUserInformation } from "../redux/actions/userActions";

const userDetailsApi = (token) => {
  return async function (dispatch) {
    try {
      return await api
        .get("/customer/mydetails", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          localStorage.setItem("currentUser", JSON.stringify(response.data))
          dispatch(setUserInformation(response.data));

        });
    } catch (error) {
      throw error;
    }
  };
};

export default userDetailsApi;
