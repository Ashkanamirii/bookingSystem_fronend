import React from "react";
import {Link} from "react-router-dom"

const Header = ({id, logo, name }) => {
  return (
    <div>
      <Link to={`./bookTime/${id}`}>
        <img src={logo} alt=""></img>
      </Link>

      <Link to={`./bookTime/${id}`}>
        <span> {name}</span>
      </Link>
    </div>
  );
};

export default Header;
