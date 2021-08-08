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
      className=""
      show={props.show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header className="" closeButton>
        <h3>Sign In</h3>
      </Modal.Header>
      <Modal.Body>
        <Form userInfoForm={submitForm} />
      </Modal.Body>
      <Modal.Footer>
        <div className="">
          Don't have an account?
          <Link to="sign-up" onClick={handleClose}>
            Sign Up
          </Link>
        </div>
        <div className="">
          <Link to="/reset/pass/" onClick={handleClose}>
            Forgot your password?
          </Link>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
export default LoginModal;
