import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
const Header = () => {
  return (
    <div className=" border-bottom border-dark mb-2 pb-4">
      <h3>Time available slots</h3>

      <div className="d-flex justify-content-between">
        <input type="date" />

        <DropdownButton
          id="dropdown-button-dark-example2"
          variant="secondary"
          menuVariant="dark"
          title="Sports"
          className="mt-2"
        >
          <Dropdown.Item href="#/action-1" active>
            Action
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};

export default Header;
