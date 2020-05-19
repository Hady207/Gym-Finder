import React from "react";

function Signup1({ formNum, setNum, manage }) {
  const onChange = (e) => {
    manage({ field: e.target.name, value: e.target.value });
  };

  return (
    <div
      className={`signup__inputs signup__inputs--1 ${
        formNum === 0 ? "signup__show" : ""
      } `}
    >
      <div className="signup__group">
        <div className="signup__subgroup">
          <label htmlFor="fname">First Name </label>
          <input
            required
            type="text"
            placeholder="Ahmad"
            name="firstName"
            id="fname"
            onChange={onChange}
          />
        </div>
        <div className="signup__subgroup">
          <label htmlFor="lname">Last Name </label>
          <input
            required
            placeholder="Maher"
            type="text"
            name="lastName"
            id="lname"
            onChange={onChange}
          />
        </div>
      </div>
      <div className="signup__group">
        <div className="signup__subgroup">
          <label required htmlFor="birthdate">
            Birthday
          </label>
          <input
            type="date"
            name="birthDate"
            id="birthdate"
            onChange={onChange}
          />
        </div>
        <div className="signup__subgroup">
          <label htmlFor="city">City </label>
          <select name="city" onChange={onChange} required id="city">
            <option defaultValue disabled>
              Address
            </option>
            <option value="Salmiya">Salmiya</option>
            <option value="Hawally">Hawally</option>
            <option value="Farawanya">Farawanya</option>
            <option value="Jahra">Jahra</option>
          </select>
        </div>
      </div>
      <div className="signup__group">
        <div className="signup__subgroup">
          <label htmlFor="address">Address </label>
          <input onChange={onChange} type="text" name="address" id="address" />
        </div>
        <div className="signup__subgroup">
          <label htmlFor="phone">Phone </label>
          <input onChange={onChange} type="phone" name="phone" id="phone" />
        </div>
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
