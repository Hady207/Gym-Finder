import React from "react";

import useToggle from "../../hooks/useToggle";

function Signup2({ formNum, setNum, manage }) {
  const [toggle, setToggle] = useToggle();

  const onChange = (e) => {
    manage({ field: e.target.name, value: e.target.value });
  };

  return (
    <div
      className={`signup__inputs signup__inputs--2${
        formNum === 1 ? "signup__show" : ""
      }`}
    >
      <div className="signup__question">
        <p>Have you ever went to a gym ?</p>
        <div className="question__group">
          <input
            id="gymCheck"
            type="checkbox"
            value={toggle}
            onChange={setToggle}
          />
          {toggle ? (
            <select name="gym" onChange={onChange} required id="gym">
              <option defaultValue disabled>
                Select A Gym
              </option>
              <option value="Golds Gym">Golds Gym</option>
              <option value="Iron Man">Iron Man</option>
              <option value="Flex">Flex</option>
              <option value="Fitness first me">Fitness first me</option>
            </select>
          ) : (
            <select name="gym" onChange={onChange} disabled required id="gym">
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
          onChange={onChange}
          name="weight"
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
          onChange={onChange}
          name="height"
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
