import React from "react";
import useInput from "../hooks/useInput";
import useToggle from "../hooks/useToggle";

function Signup3({ formNum, setNum }) {
  const [toggle, setToggle] = useToggle();
  const [gym, setGym] = useInput();
  const [weight, setWeight] = useInput();
  const [height, setHeight] = useInput();

  return (
    <div
      className={`signup__inputs signup__inputs--3${
        formNum === 2 ? "signup__show" : ""
      }`}
    >
      <div className="signup__question">
        <p>Have you ever went to a gym ?</p>
        <div className="question__group">
          <input type="checkbox" value={toggle} onChange={setToggle} />
          {toggle ? (
            <select value={gym} onChange={setGym} required id="gym">
              <option defaultValue disabled>
                Select A Gym
              </option>
              <option value="Golds Gym">Golds Gym</option>
              <option value="Iron Man">Iron Man</option>
              <option value="Flex">Flex</option>
              <option value="Fitness first me">Fitness first me</option>
            </select>
          ) : (
            <select value={gym} onChange={setGym} disabled required id="gym">
              <option defaultValue disabled>
                Select A Gym
              </option>
              <option value="Golds Gym">Golds Gym</option>
              <option value="Iron Man">Iron Man</option>
              <option value="Flex">Flex</option>
              <option value="Fitness first me">Fitness first me</option>
            </select>
          )}
        </div>
      </div>
      <div className="signup__group">
        <label htmlFor="weight">Weight</label>
        <input
          min="30"
          max="300"
          onChange={setWeight}
          value={weight}
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
          onChange={setHeight}
          value={height}
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
