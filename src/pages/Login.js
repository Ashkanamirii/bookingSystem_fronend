import Form from "../components/auth/login/Form.jsx";
import LoggedContext from "../context/LoggedContext.js";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext.js";
import getUser from "../functions/GetUser";

function Login() {
  let history = useHistory();
  const [userInformation, setUserInformation] = useContext(UserContext);
  const [isLogged, setIsLogged] = useContext(LoggedContext);
  const [error, setError] = useState("");

  const submitForm = (user) => {
    if (typeof getUser(user) == "object") {
      setUserInformation(getUser(user));
      setIsLogged(true);

      history.push("/home");
    } else {
      setError(getUser(user));
    }
  };
  return (
    <div className="outer">
      <div className="inner">
        <h3>Log in</h3>
        <Form userInfoForm={submitForm} />
      </div>
    </div>
  );
}
export default Login;
