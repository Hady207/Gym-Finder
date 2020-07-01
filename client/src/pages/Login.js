import React from "react";

import useInput from "../hooks/useInput";

const Login = () => {
  const [email, handleEmailChange] = useInput();
  const [password, handlePasswordChagne] = useInput();

  return (
    <>
      <div className="login__grid">
        <div className="login__grid--left">
          <h1>Login and Save Your time</h1>
          <form className="login__form">
            <div className="login__container">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="login__form--email"
                placeholder="doe@example.com"
                required
              />
            </div>
            <div className="login__container">
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="password"
                className="login__form--password"
                placeholder="••••••••"
                value={password}
                onChange={handlePasswordChagne}
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
    </>
  );
};

export default Login;
