import {
  Navbar,
  Form,
  FormControl,
  Button,
  Dropdown,
  DropdownButton,
  ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginModal from "../auth/login/LoginModal.jsx";
import { connect, useDispatch } from "react-redux";
import { setLogin } from "../../redux/actions/loginActions";
import userDetailApi from "../../service/userDetailsApi";
import { setUserInformation } from "../../redux/actions/userActions";

/**
 * Header of the application
 * @param {*}
 */
function Header(props) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const handleShow = (x) => setShowModal(x);
  const [isLogged, setIsLogged] = useState(props.isLogin);

  useEffect(async () => {
    if (isLogged){
      const t = localStorage.getItem("token");
      const userInfo = await userDetailApi(t);
      dispatch(setUserInformation(userInfo));
      setFirstName(userInfo.firstName);
      // props.dispatch(setLogin(true)) another way to send info
    }
  }, [isLogged]);

  console.log(props.user);
  console.log();

  const logOut = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    dispatch(setLogin(false));
  };

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        className="d-flex justify-content-between"
      >
        <div>
          <Navbar.Brand href="/home">BOOKING SYSTEM</Navbar.Brand>

          <Link className="text-light" to="/clubs">
            Book
          </Link>
        </div>

        <div className="">
          {props.isLogin ? (
            <DropdownButton
              as={ButtonGroup}
              id={`dropdown-variants-primary`}
              variant="primary"
              title={firstName}
            >
              <Dropdown.Item eventKey="1">Profile</Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown.Item onClick={logOut} eventKey="4">
                Log Out
              </Dropdown.Item>
            </DropdownButton>
          ) : (
            <Button
              className=" ml-3"
              variant="primary"
              onClick={() => handleShow(true)}
            >
              login
            </Button>
          )}

          <Button className=" ml-3">
            <Link className="text-light" to="/sign-up">
              sign up
            </Link>
          </Button>
        </div>
      </Navbar>
      <LoginModal handleClick={handleShow} show={showModal} />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.loginReducer.isLogin,
    user: state.userReducer.user,
  };

  // const { isLogin } = state.login;
  // return {
  //   isLogin,
  // };
};
// const mapDispatchToProps = (dispatch) =>{
//   return {
//     setLogin = dispatch.setLogin(true)
//   }
// }

export default connect(mapStateToProps, null)(Header);
