import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Form(props) {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  return (
    <form
      className="form-group"
      onSubmit={(e) => {
        e.preventDefault();
        props.userInfoForm(userLogin);
      }}
    >
      <h5 className="text-danger text-center"> {props.error}</h5>
      <div className="form-group">
        <input
          type="email"
          className="form-control mb-2"
          placeholder="Enter email"
          value={userLogin.email}
          onChange={(e) =>
            setUserLogin({ ...userLogin, email: e.target.value })
          }
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={userLogin.password}
          onChange={(e) =>
            setUserLogin({ ...userLogin, password: e.target.value })
          }
        />
      </div>

      <div className="d-grid gap-2 mt-2">
        <Button type="submit" variant="warning" size="lg">
          Sign in
        </Button>
      </div>
    </form>
  );
}

export default Form;
