import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

const Navbar = () => {
  const { user } = useAuth();
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <nav className="primary-nav">
      <NavLink to="/" end style={navLinkStyles}>
        Home
      </NavLink>
      <NavLink to="/about" style={navLinkStyles}>
        About
      </NavLink>
      <NavLink to="/products" style={navLinkStyles}>
        Products
      </NavLink>
      <NavLink to="/profile" style={navLinkStyles}>
        Profile
      </NavLink>
      {!user && (
        <NavLink to="/login" style={navLinkStyles}>
          Login
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
