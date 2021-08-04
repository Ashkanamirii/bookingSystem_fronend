import {
  Navbar,
  Button,
  Dropdown,
  DropdownButton,
  ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginModal from "../auth/login/LoginModal.jsx";
import { connect, useDispatch, useSelector } from "react-redux";
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
  const isLogin = useSelector((state) => state.loginReducer.isLogin);

  useEffect(async () => {
    console.log(isLogin);
    if (isLogin) {
      const t = localStorage.getItem("token");
      const u = await userDetailApi(t);
      dispatch(setUserInformation(u));
      setFirstName(u.firstName);
      setUserInformationToLocalStorage(u)
    }
  }, [isLogin]);


  const setUserInformationToLocalStorage = (userInfo) => {
    if (localStorage.getItem("token")){
      localStorage.setItem("currentUser", JSON.stringify(userInfo))
    }
  }

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
          {isLogin ? (
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

export default Header;
