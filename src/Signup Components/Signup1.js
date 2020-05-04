import React from "react";
import useInput from "../hooks/useInput";

function Signup1({ formNum, setNum }) {
  const [fValue, fnameChange] = useInput();
  const [lValue, lnameChange] = useInput();
  const [dateValue, dateChange] = useInput();
  const [phoneValue, phoneChange] = useInput();
  const [cityValue, cityChange] = useInput();
  const [addressValue, addressChange] = useInput();
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
          value={fValue}
          onChange={fnameChange}
        />
        <label htmlFor="lname">Last Name: </label>
        <input
          required
          placeholder="Maher"
          type="text"
          name="lastname"
          id="lname"
          value={lValue}
          onChange={lnameChange}
        />
      </div>
      <div className="signup__group">
        <label required htmlFor="birthdate">
          Birthday:
        </label>
        <input
          type="date"
          name="birthdate"
          id="birthdate"
          onChange={dateChange}
          value={dateValue}
        />
        <label htmlFor="city">City: </label>
        <select value={cityValue} onChange={cityChange} required id="city">
          <option defaultValue disabled>
            Select a city
          </option>
          <option value="Salmiya">Salmiya</option>
          <option value="Hawally">Hawally</option>
          <option value="Farawanya">Farawanya</option>
          <option value="Jahra">Jahra</option>
        </select>
      </div>
      <div className="signup__group">
        <label htmlFor="address">Address: </label>
        <input
          value={addressValue}
          onChange={addressChange}
          type="text"
          name="address"
          id="address"
        />
        <label htmlFor="phone">Phone: </label>
        <input
          value={phoneValue}
          onChange={phoneChange}
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
