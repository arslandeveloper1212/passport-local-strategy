import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="NavCss">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/addproducts">AddProducts</Link>
      </li>
      <li>
        <Link to="/updateproducts">UpdateProducts</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      
        {/* get user data login to show the logic here in turnary operator  */}
      {!true ? (
          <>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/register">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>)
}
    </div>
  );
};

export default Nav;
