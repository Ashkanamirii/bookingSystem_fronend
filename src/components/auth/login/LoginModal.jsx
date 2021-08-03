import { Modal } from "react-bootstrap";
import "./modal.css";
import { Link, useHistory } from "react-router-dom";
import Form from "./Form.jsx";
import getTokenApi from "../../../service/getTokenApi";
import { useDispatch } from "react-redux";
import { setLogin } from "../../../redux/actions/loginActions";

function LoginModal(props) {
  let history = useHistory();
  const dispatch = useDispatch();
  const handleClose = () => {
    props.handleClick(false);
  };

  const submitForm = async (user) => {
    await getTokenApi(user);
    dispatch(setLogin(true))
    handleClose();
    history.push("/home");
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
