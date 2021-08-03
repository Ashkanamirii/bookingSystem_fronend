import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import {sendEmail,resetPassword} from "./../../service/forgetPasswordApi"

const ForgotPassword = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const query = new URLSearchParams(useLocation().search);
  const emailQuery = query.get("email");
  const tokenQuery = query.get("token");


  const sendEmailToUser = () => {
    sendEmail(email)
    history.push("/home")
  }

  const resetPasswordHandle = () => {
    resetPassword(tokenQuery,emailQuery, password)
    history.push("/login")
  }
  

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
            onClick={resetPasswordHandle}
          >
            Renew password
          </button>
        </div>
      ) : (
        <div>
          <button type="submit" className="btn btn-primary" onClick={sendEmailToUser}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
