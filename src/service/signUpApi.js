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
        console.log(response.data);

        swal(
          "An account verification email was sent, check your email to activate your account",
          response.data,
          "success"
        ).then(() => {
          // history.push("/login");
        });
      }
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        swal("Error ", error.response.data, "warning").then(() => {
          // history.push("/home");
        });
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}

export default signUpApi;
