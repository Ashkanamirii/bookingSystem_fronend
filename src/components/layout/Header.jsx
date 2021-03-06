import { Nav, Navbar, NavDropdown, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import LoginModal from '../auth/login/LoginModal.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { setLogin } from '../../redux/actions/loginActions'

/**
 * Header of the application
 * @param {*}
 */
function Header(props) {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()
  const isLogin = useSelector((state) => state.loginReducer.isLogin)
  const currentUser = useSelector((state) => state.userReducer.user)

  // FUNCTIONS
  const handleShow = (x) => setShowModal(x)

  const logOut = () => {
    localStorage.removeItem('currentUser')
    localStorage.removeItem('token')
    dispatch(setLogin(false))
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/home">
            <strong>SUPER BOOKING&nbsp;</strong>
            <i className="fas fa-home"></i>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex justify-content-around w-50">
            <Link to="/clubs">Booking</Link>
            <Link to="/about">About Us</Link>
            <Link to="/places">Venues</Link>
            <Link to="/getbooking">For The Clubs</Link>
          </Nav>

          <Nav className="me-2">
            {isLogin ? (
              <NavDropdown
                title={currentUser?.firstName}
                id="collasible-nav-dropdown"
              >
                
                  <Link className="text-dark dropdown-item" to="/profile">
                    Profile
                  </Link>
                
                <NavDropdown.Item className="text-dark" onClick={logOut}>
                  log Out
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <div>
                <Button variant="secondary" onClick={() => handleShow(true)}>
                  LOGIN
                </Button>

                <Button className="ms-2" variant="secondary">
                  <Link to="/sign-up" className="text-light">
                    SIGN UP
                  </Link>
                </Button>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <LoginModal showModal={handleShow} show={showModal} />
    </Navbar>
  )
}

export default Header
