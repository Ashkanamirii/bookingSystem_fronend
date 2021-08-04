import Form from "../components/auth/login/Form.jsx";
import { useHistory } from "react-router-dom";
import getTokenApi from "../service/getTokenApi";
import { useDispatch } from "react-redux";
import { setLogin } from "../redux/actions/loginActions";

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();

  const submitForm = async (user) => {
    await getTokenApi(user);
    dispatch(setLogin(true));
    history.push("/home");
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
