import React from "react";

function Signup3({ formNum, setNum }) {
  return (
    <div
      className={`signup__inputs signup__inputs--3${
        formNum === 2 ? "signup__show" : ""
      }`}
    >
      <div className="signup__question">
        <p>Have you ever went to a gym ?</p>
        <div className="question__group">
          <input type="checkbox" />
          <select disabled required id="gym">
            <option defaultValue disabled>
              Select A Gym
            </option>
            <option>Golds Gym</option>
            <option>Iron Man</option>
            <option>Flex</option>
            <option>Fitness first me</option>
          </select>
        </div>
      </div>
      <div className="signup__group">
        <label htmlFor="weight">Weight</label>
        <input
          min="30"
          max="300"
          placeholder="60KG"
          type="number"
          id="weight"
        />
      </div>
      <div className="signup__group">
        <label htmlFor="height">Height</label>
        <input
          min="120"
          max="270"
          placeholder="180CM"
          type="number"
          id="height"
        />
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
