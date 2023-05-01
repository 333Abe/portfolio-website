import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <div>
        <p>Welcome to my site</p>
        <h1 id="myName">Adrian Bennett</h1>
        <h2 id="jobTitle">Software Developer</h2>
      </div>
      <div id="homeButtons">
        <Link to={`/about`} className="homeLink">
          <div className="button">About</div>
        </Link>

        <Link to={`/cv`} className="homeLink">
          <div className="button">CV</div>
        </Link>
        <Link to={`/contact`} className="homeLink">
          <div className="button">Contact</div>
        </Link>
        <Link to={`/projects`} className="homeLink">
          <div className="button">Projects</div>
        </Link>
      </div>
    </main>
  );
};

export default Home;
