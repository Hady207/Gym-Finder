import React from "react";
import useInput from "../hooks/useInput";

function Signup1({ formNum, setNum }) {
  const [value, handleChange, reset] = useInput();
  return (
    <div
      className={`signup__inputs signup__inputs--1 ${
        formNum === 0 ? "signup__show" : ""
      } `}
    >
      <div className="signup__group">
        <label htmlFor="fname">First Name: </label>
        <input
          required
          type="text"
          placeholder="Ahmad"
          name="firstname"
          id="fname"
          // value={value}
          // onChange={handleChange}
        />
        <label htmlFor="lname">Last Name: </label>
        <input
          required
          placeholder="Maher"
          type="text"
          name="lastname"
          id="lname"
          // value={value}
          // onChange={handleChange}
        />
      </div>
      <div className="signup__group">
        <label required htmlFor="birthdate">
          Birthday:
        </label>
        <input type="date" name="birthdate" id="birthdate" />
        <label htmlFor="city">City: </label>
        <select required id="city">
          <option defaultValue disabled>
            Select a city
          </option>
          <option>Salmiya</option>
          <option>Hawally</option>
          <option>Farawanya</option>
          <option>Jahra</option>
        </select>
      </div>
      <div className="signup__group">
        <label htmlFor="address">Address: </label>
        <input
          // value={value}
          // onChange={handleChange}
          type="text"
          name="address"
          id="address"
        />
        <label htmlFor="phone">Phone: </label>
        <input
          // value={value}
          // onChange={handleChange}
          type="phone"
          name="phone"
          id="phone"
        />
      </div>
      <div className="signup__button">
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

export default Signup1;
