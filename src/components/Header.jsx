import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from "./login/Login.jsx";
import { useState } from "react";
/**
 * Header of the application
 * @param {*} params
 */
function Header(params) {
  const [show, setShow] = useState(false);
  //const [isLogged, setIsLogged] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return <header>{headerLayout()}</header>;

  function headerLayout() {
    return (
      <>
        <Navbar
          bg="dark"
          variant="dark"
          className="d-flex justify-content-between"
        >
          <Navbar.Brand href="home">Navbar</Navbar.Brand>

          <Form inline className="w-50">
            <FormControl type="text" placeholder="Search" className="w-75" />
            <Button variant="outline-info">Search</Button>
          </Form>

          <div className="">
            <Button className=" ml-3" variant="primary" onClick={handleShow}>
              login
            </Button>

            <Button className=" ml-3">
              <Link className="text-light" to="checkout">
                {" "}
                Checkout{" "}
              </Link>
            </Button>
          </div>
        </Navbar>
        <Login loginClose={handleClose} loginShow={show} />
      </>
    );
  }
}

export default Header;
