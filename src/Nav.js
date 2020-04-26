import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import useToggle from "./hooks/useToggle";

function Nav(props) {
  const { regular } = props;
  const [isOpen, setOpen] = useToggle();

  useEffect(() => {
    const main = document.querySelector(".main");
    const secondPicture = document.querySelector(".flex-container-2");
    if (main && secondPicture) {
      if (isOpen) {
        main.classList.add("main__go--right");
        secondPicture.classList.add("flex-container-2-adjust");
      } else {
        main.classList.remove("main__go--right");
        secondPicture.classList.remove("flex-container-2-adjust");
      }
    }
  });

  useEffect(() => {
    // Update the document title using the browser API
    if (!regular) {
      const navbar = document.querySelector(".navigation");

      window.addEventListener("scroll", scrollMenu);

      function scrollMenu() {
        if (window.pageYOffset >= 250) {
          navbar.classList.add("menu__transparent");
        } else {
          navbar.classList.remove("menu__transparent");
        }
      }
    }
  });

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
            <NavLink to="/" className="side__link ">
              <i className="fas fa-home"></i> Home
            </NavLink>
          </li>
          <li className="side__items">
            <NavLink to="/Gyms" className="side__link">
              <i className="fas fa-info"></i> About
            </NavLink>
          </li>
          <li className="side__items">
            <NavLink to="/Gyms" className="side__link">
              <i className="fas fa-dumbbell"></i> Gyms
            </NavLink>
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
        <NavLink to="/" className="side__link ">
          <h1 className="navigation__brand--title">G F</h1>
        </NavLink>
      </div>
      <div className="navigation__forms">
        <Link to="/signup" className="button navigation__forms--signup">
          Sign up
        </Link>
        <Link className="button navigation__forms--login">Login</Link>
      </div>
    </nav>
  );
}

export default Nav;
