import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Login = () => {
  return (
    <>
      <Nav regular />
      <div className="login__grid">
        <div className="login__grid--left">
          <h1>Login and Save Your time</h1>
          <form className="login__form">
            <div className="login__container">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                className="login__form--email"
                placeholder="doe@example.com"
              />
            </div>
            <div className="login__container">
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="password"
                className="login__form--password"
                placeholder="••••••••"
                required
              />
            </div>
            <button type="submit" className="login__button">
              login
            </button>
          </form>
        </div>
        <div className="login__grid--right"></div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
