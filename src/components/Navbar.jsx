import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <nav id="navbar">
      <Link to={`/`}>
        <img src="./images/AB-logo.png" alt="logo" id="logo" />
      </Link>
      <div id="navbar-links">
        <Link to={`/about`} className="navbar-link">
          about
        </Link>
        <Link to={`/contact`} className="navbar-link">
          contact
        </Link>
        <Link to={`/cv`} className="navbar-link">
          cv
        </Link>
        <Link to={`/projects`} className="navbar-link">
          projects
        </Link>
      </div>
      <img
        id="navbar-background-pattern"
        src="./images/Seed-of-Life.svg"
        alt="background image"
      />
    </nav>
  );
};

export default Navbar;
