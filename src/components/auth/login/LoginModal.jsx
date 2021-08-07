import { Modal } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Form from "./Form.jsx";
import getTokenApi from "../../../service/getTokenApi";
import userDetailsApi from "../../../service/userDetailsApi";

import { useDispatch } from "react-redux";
import { setLogin } from "../../../redux/actions/loginActions";
import { setUserInformation } from "../../../redux/actions/loginActions";

function LoginModal(props) {
  let history = useHistory();
  const dispatch = useDispatch();
  const handleClose = () => {
    props.handleClick(false);
  };

  const submitForm = async (user) => {
    let token = await dispatch(getTokenApi(user));
    dispatch(userDetailsApi(token));
    handleClose();
  };

  return (
    <Modal
      show={props.show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <h3>Sign In</h3>
      </Modal.Header>
      <Modal.Body>
        <Form userInfoForm={submitForm} />
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
