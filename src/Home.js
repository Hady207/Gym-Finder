import React from "react";
import Nav from "./Nav";
// import "./App.css";
import "./sass/main.scss";
function Home() {
  return (
    <div>
      <header className="header">
        <Nav />
        <div className="header__hero">
          <h1 className="header__hero--title">Find the ideal gym today</h1>
          <button className="header__button">
            <span className="header__button--icon">
              <i className="fas fa-arrow-right"></i>
            </span>
            <span className="header__button--text">learn More</span>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Home;
