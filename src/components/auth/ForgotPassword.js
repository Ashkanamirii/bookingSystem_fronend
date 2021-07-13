import { useState } from "react";
import api from "./../../api/endpoint";
import { useLocation, useHistory } from "react-router-dom";
import swal from "sweetalert";

const ForgotPassword = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const query = new URLSearchParams(useLocation().search);
  // const [showNewPass,setShowNewPass] = useState(false)
  const emailQuery = query.get("email");
  const tokenQuery = query.get("token");

  const sendEmail = () => {
    api
      .post(`/authenticate/resetpass/${email}`)
      .then((response) => {
        swal(
          "A reset password link was sent, check your email to continue the process",
          response.data,
          "success"
        ).then(() => {
          history.push("/home");
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

  const resetPassword = () => {
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
          history.push("/login");
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

  return (
    <div className="container">
      <h3>RESET YOUR PASSWORD</h3>
      <p>
        It looks like you forgot your password
      </p>
      <input
        className="form-control col-6 mb-2 "
        type="email"
        placeholder="Email"
        disabled={tokenQuery ? "disabled" : ""}
        value={tokenQuery ? emailQuery : email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {tokenQuery ? (
        <div>
    
          <input
            className="form-control col-6 mb-2"
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="form-control col-6 mb-2"
            type="password"
            placeholder="Repeat new password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={resetPassword}
          >
            Renew password
          </button>
        </div>
      ) : (
        <div>
          <button type="submit" className="btn btn-primary" onClick={sendEmail}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
