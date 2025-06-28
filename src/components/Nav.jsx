import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IMBDImage from "../Assets/IMBD.jpg";
import { Link } from "react-router-dom";

const Nav = () => {
  function openMenu() {
    document.body.classList += "menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={IMBDImage} alt="" className="logo" />
        </Link>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/movies" className="nav__link">
              Find Your Movie
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/" className="nav__link nav__link--primary">
              Contact
            </Link>
          </li>
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className="menu__link">
                Home
              </Link>
              <Link to="/" className="menu__link">
                Find Your Movie
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
