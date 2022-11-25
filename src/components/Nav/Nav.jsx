import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="font-mono flex bg-black py-3 px-4 text-lg text-white">
      <NavLink to="/" className="mr-auto font-logo">
        Skyframe
      </NavLink>
      <NavLink to="/login" className="mr-4">
        Login
      </NavLink>
      <NavLink to="/signup">Sign up</NavLink>
    </nav>
  );
};

export default Nav;
