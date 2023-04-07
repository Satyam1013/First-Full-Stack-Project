import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "150px",
        height: "50px",
      }}
    >
      <Link to="/register">Sign Up</Link>
      <Link to="/login">Login</Link>
      <Link to="/notes">Notes</Link>
    </div>
  );
};

export default Navbar;
