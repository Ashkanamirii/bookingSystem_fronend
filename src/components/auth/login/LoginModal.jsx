import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from "./Form.jsx";
import getTokenApi from "../../../service/getTokenApi";
import userDetailsApi from "../../../service/userDetailsApi";
import { useDispatch } from "react-redux";

function LoginModal(props) {
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
      {...props}
      show={props.show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="" closeButton id="contained-modal-title-vcenter">
        <h3>Sign In</h3>
      </Modal.Header>
      <Modal.Body>
        <Form userInfoForm={submitForm} />
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <div className="forgot-password">
          Don't have an account?
          <Link className="ms-2"to="sign-up" onClick={handleClose}>
            Sign Up
          </Link>
        </div>
        <div className="forgot-password">
          <Link to="/reset/pass/" onClick={handleClose}>
            Forgot your password?
          </Link>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
export default LoginModal;
