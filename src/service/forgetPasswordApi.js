
import api from "./endpoint.js";
import swal from "sweetalert";

export const  sendEmail = (email) => {
  api
    .post(`/authenticate/resetpass/${email}`)
    .then((response) => {
      swal(
        "A reset password link was sent, check your email to continue the process",
        response.data,
        "success"
      ).then(() => {
        // history.push("/home");
      });
      console.log(response);
    })
    .catch((error) => {
      swal(
        "Somethings happened during reset password",
        "Please try again",
        "warning"
      );
      console.log(error);
    });
};

export const resetPassword = (tokenQuery,emailQuery,password) => {
  api
    .post("/authenticate/renewpass/", {
      resetToken: tokenQuery,
      email: emailQuery,
      newPassword: password,
    })
    .then((response) => {
      swal(
        "your password has been changed successfully, You can log in now",
        response.data,
        "success"
      ).then(() => {
        // history.push("/login");
      });
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
      swal(
        "Somethings happened during reset password",
        "Please try again",
        "warning"
      );
    });
};
