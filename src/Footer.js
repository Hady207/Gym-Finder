import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__menu">
        <li className="footer__menu__element">
          <Link to="/">Home</Link>
        </li>
        <li className="footer__menu__element">
          <Link to="/">About</Link>
        </li>
        <li className="footer__menu__element">
          <Link to="/gyms">Gyms</Link>
        </li>
        <li className="footer__menu__element">
          <Link to="/">Contact</Link>
        </li>
      </ul>

      <h2 className="footer__title">
        <Link to="/">G F</Link>
      </h2>

      <div className="footer__info">
        <div className="footer__info--copyright">
          all rights reserved for Gym finder
        </div>
        <div className="footer__info--developer">
          design and developed by Hadi Maher
        </div>
      </div>
    </footer>
  );
};

export default Footer;
