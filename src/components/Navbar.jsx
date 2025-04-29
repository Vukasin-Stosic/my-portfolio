import "../styles/navbar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";

function Navbar() {
  const [hamburger, setHamburger] = useState(false);

  function toggleHamburger() {
    hamburger ? setHamburger(false) : setHamburger(true);
  }

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <nav>
        <ul
          className={`navbar ${!hamburger ? "hidden" : ""}`}
          onClick={toggleHamburger}
        >
          <li className="navbar-item">
            <a className="navbar-link" href="#">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a className="navbar-link" href="#about">
              About
            </a>
          </li>
          <li className="navbar-item">
            <a className="navbar-link" href="#technologies">
              Technologies
            </a>
          </li>
          <li className="navbar-item">
            <a className="navbar-link" href="#projects">
              Projects
            </a>
          </li>
          <li className="navbar-item">
            <a className="navbar-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleHamburger}>
          {hamburger ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
