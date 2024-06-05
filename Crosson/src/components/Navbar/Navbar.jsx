import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <Link to='/product'>
          <li>Products</li>
        </Link>
        <li>Solutions</li>
        <li>software</li>
        <li>services</li>
        <li>corporate</li>
        <li>News</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
