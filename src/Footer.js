import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__menu">
        <li className="footer__menu__element">
          <a href="/">Home</a>
        </li>
        <li className="footer__menu__element">
          <a href="/">About</a>
        </li>
        <li className="footer__menu__element">
          <a href="/">Gyms</a>
        </li>
        <li className="footer__menu__element">
          <a href="/">Contact</a>
        </li>
      </ul>

      <h2 className="footer__title">G F</h2>

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
}

export default Footer;
