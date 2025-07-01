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
          <img className="logo" src={IMBDImage} alt=""  />
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
        </ul>
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className="menu__link" onClick={closeMenu}>
                Home
              </Link>
              <Link to="/movies" className="menu__link" onClick={closeMenu}>
                Find Your Movie
              </Link>
              <Link to="/" className="menu__link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
