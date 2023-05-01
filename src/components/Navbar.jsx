import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [rotationAngle, setRotationAngle] = useState(0);

  const handleLinkHover = (e) => {
    const angle = e.target.dataset.rotationAngle;
    if (angle) {
      setRotationAngle(angle);
    }
  };

  return (
    <div id="nav-container">
      <div id="outer-logo">
        <Link to={`/`} id="logo"></Link>
      </div>

      <nav id="navbar">
        <div id="navbar-links" onMouseOver={handleLinkHover}>
          <Link
            to={`/about`}
            className="navbar-link"
            data-rotation-angle="90"
          >
            about
          </Link>
          <Link
            to={`/cv`}
            className="navbar-link"
            data-rotation-angle="180"
          >
            cv
          </Link>
          <Link
            to={`/contact`}
            className="navbar-link"
            data-rotation-angle="360"
          >
            contact
          </Link>
          <Link
            to={`/projects`}
            className="navbar-link"
            data-rotation-angle="450"
          >
            projects
          </Link>
        </div>
        <div
          id="navbar-background-pattern"
          style={{ transform: `rotate(${rotationAngle}deg)` }}
        ></div>
      </nav>
    </div>
  );
};

export default Navbar;
