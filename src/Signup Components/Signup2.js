import React from "react";
import useInput from "../hooks/useInput";

function Signup2({ formNum, setNum }) {
  const [email, setEmail] = useInput();
  const [password, setPassword] = useInput();
  const [rPassword, setRPassword] = useInput();

  return (
    <div
      className={`signup__inputs signup__inputs--2 ${
        formNum === 1 ? "signup__show" : ""
      }`}
    >
      <div className="signup__group">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          value={email}
          onChange={setEmail}
          type="email"
          placeholder="doe@example.com"
          required
        />
      </div>
      <div className="signup__group">
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          value={password}
          onChange={setPassword}
          type="password"
          placeholder="••••••••"
          required
        />
      </div>
      <div className="signup__group">
        <label htmlFor="rpassword">Repeat Password:</label>
        <input
          id="rpassword"
          value={rPassword}
          onChange={setRPassword}
          type="password"
          placeholder="••••••••"
          required
        />
      </div>
      <div className="signup__group">
        <div className="signup__profilePicture">
          <img src={require("../img/default.jpg")} alt="Profile" />
        </div>
        <input type="file" id="myFile" name="filename" />
      </div>
      <div className="signup__buttons">
        <button
          onClick={() => setNum((n) => n - 1)}
          className="signup__button--prev"
        >
          <i className="fas fa-angle-left"></i> Prev
        </button>
        <button
          onClick={() => setNum((n) => n + 1)}
          className="signup__button--next"
        >
          Next <i className="fas fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Signup2;
