import api from "./endpoint.js";
import swal from "sweetalert";

function signUpApi(user) {
  console.log(user);

  api
    .post("/authenticate/signup", user)
    .then((response) => {
      if (response.status === 400) {
        console.log(response.text());
      } else {
        swal(
          "An account verification email was sent, check your email to activate your account",
          response.data,
          "success"
        ).then(() => {});
      }
    })
    .catch(function (error) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      swal("Error ", error.response.data, "warning").then(() => {});
    });
}

export default signUpApi;
