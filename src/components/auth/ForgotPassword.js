import { useState } from "react";
import api from "./../../api/endpoint";
import { useLocation } from "react-router-dom";

const ForgotPassword = () => {
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
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  const resetPassword = () => {
    console.log(tokenQuery);
    console.log(emailQuery);
    console.log(password);
    api
      .post(`/authenticate/renewpass/${tokenQuery}`, {
        email: emailQuery,
        newPassword: password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
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
            reset password
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
