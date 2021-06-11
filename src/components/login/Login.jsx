import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import api from "../../Api/endpoint";
import "./login.css";

/**
 *
 * @param {*} params
 */
function Login(props) {
  const [user, setUser] = useState({ email: "", password: "" });

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <Modal
            show={props.loginShow}
            onHide={props.loginClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <h3>Sign In</h3>
              <div className="d-flex justify-content-end social_icon">
                <span>
                  <i className="fa fa-facebook-square" aria-hidden="true"></i>
                </span>
                <span>
                  <i className="fab fa-google-plus-square"></i>
                </span>
                <span>
                  <i className="fab fa-twitter-square"></i>
                </span>
              </div>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={getUser}>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                    value={user.email}
                    onChange={(e) =>
                      setUser({
                        email: e.target.value,
                        password: user.password,
                      })
                    }
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    value={user.password}
                    onChange={(e) =>
                      setUser({ email: user.email, password: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <Button
                    type="submit"
                    className="btn btn-warning float-right "
                  >
                    Login
                  </Button>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <div className="d-flex justify-content-center links">
                Don't have an account?<a href="#">Sign Up</a>
              </div>
              <div className="d-flex justify-content-center">
                <a href="#">Forgot your password?</a>
              </div>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );

  /**
   *
   * @param {object} user
   */
  function getUser(e) {
    e.preventDefault();
    console.log(user);

    api
      .post("/user/authentication", user)
      .then((response) => {
        if (response.status === 400) {
          console.log(response.text());
        } else {
          console.log(response);
        }
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }
}

export default Login;
