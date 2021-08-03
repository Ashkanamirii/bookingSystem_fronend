
import api from "./endpoint.js";
import swal from "sweetalert";


const authenticateApi = (token) => {
  
  console.log(token);
  return api
    .get("authenticate/verify/" + token)
    .then((response) => {
      swal("Your account is activated", response.data, "success").then(() => {
        return response.data
      });
    })
    .catch((error) => {
      if (error.response.status === 500)
        swal("Server gave an error, but seems to work", "", "error");
      else
        swal("Couldn't activate your account", "some error", "error").then(
          () => {
            // history.push("/home");
          }
        );
      console.log(error.response);
    });
};

export default authenticateApi;
