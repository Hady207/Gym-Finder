import React from 'react';
import useToggle from '../../hooks/useToggle';

const SignupComponent3 = ({ values, setStage, dispatch }) => {
  const [toggleGym, setToggleGym] = useToggle();
  const [toggleType, setToggleType] = useToggle();

  const onChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const onCheckBoxChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.checked });
  };

  return (
    <div className="signup__container">
      <div className="signup__group">
        <p>Are you currently a member in a gym ?</p>
        <div className="signup__group--container">
          <input
            id="gymCheck"
            type="checkbox"
            value={toggleGym}
            onChange={setToggleGym}
          />

          {toggleGym ? (
            <select
              name="gym"
              onChange={onChange}
              required
              value={values.gym}
              id="gym"
            >
              <option defaultValue disabled>
                Select A Gym
              </option>
              <option value="Golds Gym">Golds Gym</option>
              <option value="Iron Man">Iron Man</option>
              <option value="Flex">Flex</option>
              <option value="Fitness first me">Fitness first me</option>
            </select>
          ) : (
            <select
              name="gym"
              onChange={onChange}
              value={values.gym}
              disabled
              required
              id="gym"
            >
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
        <p>What is the gym type you looking for ?</p>
        <div className="signup__group--container">
          <input
            id="typeCheck"
            type="checkbox"
            value={toggleType}
            onChange={setToggleType}
          />
          {toggleType ? (
            <select
              name="gymType"
              onChange={onChange}
              value={values.gymType}
              required
              id="gym"
            >
              <option defaultValue disabled>
                Select A Gym Type
              </option>
              <option value="health">Health Club</option>
              <option value="iron">Classic Iron</option>
              <option value="Crossfit">Crossfit club</option>
            </select>
          ) : (
            <select
              name="gymType"
              onChange={onChange}
              value={values.gymType}
              disabled
              required
              id="gym"
            >
              <option defaultValue disabled>
                Select A Gym Type
              </option>
              <option value="health">Health Club</option>
              <option value="iron">Classic Iron</option>
              <option value="Crossfit">Crossfit club</option>
            </select>
          )}
        </div>
      </div>

      <div className="signup__group">
        <p>What is the gym type you looking for ?</p>
        <div className="signup__group--container">
          <input
            type="checkbox"
            id="equipment"
            name="equipment"
            onChange={onCheckBoxChange}
            value="equipment"
          />
          <label htmlFor="equipment">Equipment</label>
        </div>
        <div className="signup__group--container">
          <input
            type="checkbox"
            id="staff"
            name="staff"
            onChange={onCheckBoxChange}
            value="staff"
          />
          <label htmlFor="staff">Staff</label>
        </div>
      </div>

      <div className="buttons__group">
        <button
          className="signup__button--prev"
          onClick={() => setStage((n) => n - 50)}
        >
          <i className="fas fa-angle-left"></i> Prev
        </button>
        <button type="submit" className="signup__button--next">
          Signup
        </button>
      </div>
    </div>
  );
};

export default SignupComponent3;
