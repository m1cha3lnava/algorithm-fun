import React from "react";
import NavList from "./NavList";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Home
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavList style="nav-item" link="/geometry" text="Geometry" />
          <NavList style="nav-item" link="/highscores" text="High Scores" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
