import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { sendEmail, resetPassword } from "./../../service/forgetPasswordApi";

const ForgotPassword = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const query = new URLSearchParams(useLocation().search);
  const emailQuery = query.get("email");
  const tokenQuery = query.get("token");

  const sendEmailToUser = () => {
    sendEmail(email);
    history.push("/home");
  };

  const resetPasswordHandle = () => {
    resetPassword(tokenQuery, emailQuery, password);
    history.push("/login");
  };

  return (
    <div className="m-5">
      <div className="d-flex flex-column  justify-content-center text-center form-group">
        <div className="container">
          <h3>RESET YOUR PASSWORD</h3>
          <p>
            {!tokenQuery
              ? "Please enter your email to get the instructions"
              : "a"}
          </p>
          <input
            className="m-4 p-2 rounded bg-light text-center w-50"
            type="email"
            placeholder="SuperBooking@gmail.com"
            disabled={tokenQuery ? "disabled" : ""}
            value={tokenQuery ? emailQuery : email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {tokenQuery ? (
          <div>
            <input
              className="col-6 mb-2"
              type="password"
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="col-6 mb-2"
              type="password"
              placeholder="Repeat new password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={resetPasswordHandle}
            >
              Renew password
            </button>
          </div>
        ) : (
          <div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={sendEmailToUser}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
