import { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./../../pages/Home.js";
import SignUp from "./../../pages/SignUp.js";
import Login from "../../pages/Login.js";
import Verification from "../../pages/Verification.js";
import ForgotPassword from "./../auth/ForgotPassword";
import TimeAvailable from "./../timeAvailable";
import Clubs from "./../../pages/Clubs";
import { useSelector, useDispatch } from "react-redux";
import userDetailsApi from "./../../service/userDetailsApi";

function Main() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.loginReducer.isLogin);

  useEffect(() => {
    if (isLogged) {
      const token = localStorage.getItem("token");
      dispatch(userDetailsApi(token));
    }
  }, []);
  return (
    <div className="main-content container mt-1">
      <Switch>
        <Route path="/" exact>
          {isLogged ? <Home /> : <Login />}
        </Route>

        <Route path="/home" exact>
          {isLogged ? <Home /> : <Redirect to="/login" />}
        </Route>
        <Route path="/sign-up">
          <SignUp></SignUp>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/verify/account/">
          <Verification></Verification>
        </Route>
        <Route path="/reset/pass/">
          <ForgotPassword></ForgotPassword>
        </Route>
        <Route path="/bookTime/:id">
          <TimeAvailable></TimeAvailable>
        </Route>
        <Route path="/clubs">
          <Clubs></Clubs>
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
