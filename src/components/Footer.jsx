import React from "react";
import IMBDImage from "../Assets/IMBD.jpg"
import { Link } from "react-router-dom";

const Footer = () => {
    return( 
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link to="/">
                    <figure className="footer__logo">
                        <img src={IMBDImage} className="footer__logo--img" alt="" />
                    </figure>
                    </Link>
                    <div className="footer__list">
                        <Link to="/" className="footer__link">Home</Link>
                        <span className="footer__link no_cursor">About</span>
                        <Link to="/movies" className="footer__link">Movies</Link>
                    </div>
                    <div className="footer__copyright">
                        Copyright &copy; 2025 Movies
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer