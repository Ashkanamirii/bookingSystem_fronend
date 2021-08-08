import {
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Dropdown,
  DropdownButton,
  Container,
  ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import LoginModal from "../auth/login/LoginModal.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../redux/actions/loginActions";

/**
 * Header of the application
 * @param {*}
 */
function Header(props) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const handleShow = (x) => setShowModal(x);
  const isLogin = useSelector((state) => state.loginReducer.isLogin);
  const currentUser = useSelector((state) => state.userReducer.user);

  const logOut = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    dispatch(setLogin(false));
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home">
          SUPER BOOKING&nbsp;<i class="fas fa-home"></i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/clubs">Booking</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="d-flex justify-content-center">
            {isLogin ? (
              <DropdownButton
                as={ButtonGroup}
                id={`dropdown-variants-success`}
                variant="success"
                title={currentUser?.firstName}
              >
                <Dropdown.Item eventKey="1">Profile</Dropdown.Item>

                <Dropdown.Divider />
                <Dropdown.Item onClick={logOut} eventKey="4">
                  Log Out
                </Dropdown.Item>
              </DropdownButton>
            ) : (
              <div >
                <Button variant="secondary" onClick={() => handleShow(true)}>
                  login
                </Button>
                <Button href="/sign-up" className="ms-2" variant="secondary">
                  Sign Up
                </Button>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <LoginModal handleClick={handleShow} show={showModal} />
    </Navbar>

    //       <ul className="nav navbar-nav m-auto">
    //         {/* <li className="nav-item active">
    //         </li> */}
    //         <li className="nav-item active">
    //           <Link className="nav-link text-light" to="/clubs">
    //             BOOK
    //           </Link>
    //         </li>
    //         <li className="nav-item active">
    //           <Link className="nav-link text-light ml-5" to="/clubs">
    //             NEWS
    //           </Link>
    //         </li>
    //         <li className="nav-item active">
    //           <Link className="nav-link text-light ml-5" to="/clubs">
    //             ABOUT US
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>

    //     <div className="">
    //       {isLogin ? (
    //         <DropdownButton
    //           as={ButtonGroup}
    //           id={`dropdown-variants-primary`}
    //           variant="primary"
    //           title={currentUser?.firstName}
    //         >
    //           <Dropdown.Item eventKey="1">Profile</Dropdown.Item>

    //           <Dropdown.Divider />
    //           <Dropdown.Item onClick={logOut} eventKey="4">
    //             Log Out
    //           </Dropdown.Item>
    //         </DropdownButton>
    //       ) : (
    //         <Button
    //           className=" ml-3"
    //           variant="primary"
    //           onClick={() => handleShow(true)}
    //         >
    //           login
    //         </Button>
    //       )}

    //       <Button className=" ml-3">
    //         <Link className="text-light " to="/sign-up">
    //           sign up
    //         </Link>
    //       </Button>
    //     </div>
    //   </Navbar>
    //   <LoginModal handleClick={handleShow} show={showModal} />
    // </header>
  );
}

export default Header;
