import React from "react";
import { Link } from "react-router-dom";




const Nav = ({ authenticated }) => {
  console.log(authenticated)
  return (
    <div className="NavCss">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      {authenticated  ? (
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      ) : (
        <div className="d-flex">
          <li>
            <Link to="/register">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      )}
    </div>
  );
};

export default Nav;
