import React from "react";

function Signup3({ formNum, setNum, manage }) {
  const onChange = (e) => {
    manage({ field: e.target.name, value: e.target.value });
  };

  return (
    <div
      className={`signup__inputs signup__inputs--3 ${
        formNum === 2 ? "signup__show" : ""
      }`}
    >
      <div className="signup__group">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          onChange={onChange}
          type="email"
          name="email"
          placeholder="doe@example.com"
          required
        />
      </div>
      <div className="signup__group">
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          onChange={onChange}
          name="password"
          type="password"
          placeholder="••••••••"
          required
        />
      </div>
      <div className="signup__group">
        <label htmlFor="rpassword">Repeat Password:</label>
        <input
          id="rpassword"
          onChange={onChange}
          type="password"
          name="rpassword"
          placeholder="••••••••"
          required
        />
      </div>
      <div className="signup__group">
        <div className="signup__profilePicture">
          <img src={require("../../img/Profile/default.jpg")} alt="Profile" />
        </div>
        <input type="file" id="myFile" name="filePicture" />
      </div>
      <div className="signup__buttons">
        <button
          onClick={() => setNum((n) => n - 1)}
          className="signup__button--prev"
        >
          <i className="fas fa-angle-left"></i> Prev
        </button>
        <button type="submit" className="signup__button--next">
          Signup
        </button>
      </div>
    </div>
  );
}

export default Signup3;
