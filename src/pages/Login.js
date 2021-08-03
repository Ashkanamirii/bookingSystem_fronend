import Form from "../components/auth/login/Form.jsx";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import getTokenApi from "../service/getTokenApi";
import userDetailsApi from "../service/userDetailsApi";
import { connect, useDispatch } from "react-redux";
import { setLogin } from "../redux/actions/loginActions";
import { setUserInformation } from "../redux/actions/userActions";

function Login() {
  let history = useHistory();
  const dispatch = useDispatch();
  const submitForm = (user) => {
    new Promise((res,error)=>{
      getTokenApi(user);
    }).then((res) => {
      const u = userDetailsApi();
      dispatch(setUserInformation(u));
    }).catch(error => {console.log(error);})

    dispatch(setLogin(true));
    console.log("hej");
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

export default connect()(Login);
