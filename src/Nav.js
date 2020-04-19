import React from "react";
import useToggle from "./hooks/useToggle";

function Nav(props) {
  const { regular } = props;
  const [isOpen, setOpen] = useToggle();
  return (
    <nav className={`navigation ${regular ? "regular__menu" : ""}`}>
      <div
        id="hamburger"
        className={`navigation__icon ${isOpen ? "icon__active" : ""}`}
        onClick={setOpen}
      ></div>
      <div className={`navigation__side ${isOpen ? "side__show" : ""}`}>
        <ul className="side__menu">
          <li className="side__items side__active">
            <a href="/" className="side__link ">
              <i className="fas fa-home"></i> Home
            </a>
          </li>
          <li className="side__items">
            <a href="/" className="side__link">
              <i className="fas fa-info"></i> About
            </a>
          </li>
          <li className="side__items">
            <a href="/" className="side__link">
              <i className="fas fa-dumbbell"></i> Gyms
            </a>
          </li>
          <li className="side__items">
            <a href="/" className="side__link">
              <i className="fas fa-envelope-open"></i> Contact
            </a>
          </li>
          <div className="navigation__forms--side">
            <button className="button navigation__forms--signup">
              Sign up
            </button>
            <button className="button navigation__forms--login">Login</button>
          </div>
        </ul>
      </div>
      <div className="navigation__brand">
        <h1 className="navigation__brand--title">G F</h1>
      </div>
      <div className="navigation__forms">
        <button className="button navigation__forms--signup">Sign up</button>
        <button className="button navigation__forms--login">Login</button>
      </div>
    </nav>
  );
}

export default Nav;
