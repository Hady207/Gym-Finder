import React from 'react';

const SignupComponent2 = ({ dispatch, setStage }) => {
  const onChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };
  console.log(navigator.geolocation);
  return (
    <div className="signup__container">
      <div className="signup__group">
        <label htmlFor="date">Birthday</label>
        <input type="date" id="date" name="date" onChange={onChange} />
      </div>

      <div className="signup__group">
        <label htmlFor="location">Location</label>
        <input
          type="hiddin"
          id="location"
          name="location"
          onChange={onChange}
        />
        <span className="form__user--location">
          <i class="fas fa-map-marker-alt"></i>
        </span>
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

      <div className="buttons__group">
        <button
          className="signup__button--prev"
          onClick={() => setStage((n) => n - 50)}
        >
          <i className="fas fa-angle-left"></i> Prev
        </button>
        <button
          className="signup__button--next"
          onClick={() => setStage((n) => n + 50)}
        >
          Next <i className="fas fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default SignupComponent2;
