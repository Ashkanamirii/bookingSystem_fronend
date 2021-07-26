import { Modal } from "react-bootstrap";
import "./modal.css";
import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ModalContext from "../../../context/ModalContext.js";
import LoggedContext from "../../../context/LoggedContext.js";
import UserContext from "../../../context/UserContext.js";
import Form from "./Form.jsx";
import GetUser from "../../../functions/GetUser";

function LoginModal(props) {
  let history = useHistory();
  const [show, setShow] = useContext(ModalContext);
  const [setIsLogged] = useContext(LoggedContext);
  const [setUserInformation] = useContext(UserContext);
  const [error, setError] = useState("");

  setTimeout(() => {
    setError("");
  }, 3000);

  const handleClose = () => {
    setShow(false);
  };

  const submitForm = (user) => {
    if (typeof GetUser(user) == "object") {
      setUserInformation(GetUser(user));
      setIsLogged(true);
      setShow(false);
      history.push("/home");
    } else {
      setError(GetUser(user));
      setShow(false);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <h3>Sign In</h3>
      </Modal.Header>
      <Modal.Body>
        <Form userInfoForm={submitForm} error={error} />
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex justify-content-center links">
          Don't have an account?
          <Link to="sign-up" onClick={handleClose}>
            Sign Up
          </Link>
        </div>
        <div className="d-flex justify-content-center">
          <Link to="/reset/pass/" onClick={handleClose}>
            Forgot your password?
          </Link>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;
