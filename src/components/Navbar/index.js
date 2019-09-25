import React, { useState } from "react";
import NavbarContainer from "./../NavbarContainer";
import { Link } from "./../../util/router.js";

import "./styles.scss";

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer spaced={props.spaced} color={props.color}>
      <div className="container">
        <div className="navbar-brand">
          <div className="NavbarComponent__logoItem navbar-item">
            <Link to="/">
              <p className="logoText">mandeeya<span className="logoTextIO">.io</span></p>
            </Link>
          </div>
          <div
            className={"navbar-burger burger" + (menuOpen ? " is-active" : "")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={"navbar-menu" + (menuOpen ? " is-active" : "")}>
          <div className="navbar-end">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <a
              href="https://rashkeed.com"
              target="_blank"
              rel="noreferrer noopener"
              className="navbar-item"
            >
              Blog
            </a>
            <a className="navbar-item" href="#ContactMe">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
